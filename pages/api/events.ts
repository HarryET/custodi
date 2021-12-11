import { NextApiHandler } from 'next'
import { supabaseAdmin } from '../../utils/supabase'
import { z } from 'zod'

//TODO: Add types
export const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const startTime = Date.now()
    const apiKey = req.headers['x-api-key']
    if (!apiKey) return res.status(401).send('API Key missing')

    const projectRes = await supabaseAdmin.from('projects').select().eq('api_key', apiKey).single()

    if (projectRes.error) {
      return res.status(401).send('Invalid API Key')
    }

    const project = projectRes.data

    const validationRes = EventCreationRequest.safeParse(req.body)

    if (!validationRes.success) {
      return res.status(400).send(validationRes.error.flatten())
    }

    const newEvent = validationRes.data

    let eventGroup

    //Get event group that matches event data, if it exists
    const eventGroupRes = await supabaseAdmin
      .from('event_groups')
      .select()
      .eq('trace', newEvent.trace)
      .eq('title', newEvent.title)

    // If it does not exist, create event group with event trace and title
    if (!eventGroupRes.data?.length) {
      const newEventGroupRes = await supabaseAdmin
        .from('event_groups')
        .insert({ ...newEvent, project_id: project.id }, { returning: 'representation' })
      if (!newEventGroupRes.error) eventGroup = newEventGroupRes.data[0]
    } else {
      eventGroup = eventGroupRes.data[0]
    }

    // Create event with eent trace
    const eventRes = await supabaseAdmin
      .from('events')
      .insert({ ...newEvent, event_group_id: eventGroup?.id })

    return res.status(201).send(eventRes)
  } catch (error) {
    res.status(500).send(error)
  }
}

export default handler

const EventCreationRequest = z.object({
  trace: z.string(),
  title: z.string(),
  type: z.string(),
  meta: z.record(z.string()),
})
