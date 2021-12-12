import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import { useClient } from 'react-supabase'
import DashboardLayout from '../../../../components/DashboardLayout'
import NavBar from '../../../../components/NavBar'
import { useAuth } from '../../../../hooks/useAuth'
import { paths } from '../../../../utils/paths'
import { EventGroup, Project } from '../../../../types'

export default function Overview() {
  const supabase = useClient()
  const router = useRouter()
  useAuth({ nonLoggedInRedirect: paths.login() })
  const projectId = router.query.eventId as string
  const {
    data: projectRes,
    isLoading,
    isError,
  } = useQuery(
    ['project', projectId],
    async () =>
      await supabase
        .from<Project>('projects')
        .select('*,event_groups(*,events(*))')
        .eq('id', projectId)
  )

  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <div className="">
        <div className="text-semibold mt-20 mb-5">
          <h1 className=" text-4xl mt-20 mb-11 ">Events</h1>
        </div>
        {projectRes?.data?.[0].event_groups.map((eg) => (
          <EventCard key={eg.id} eventGroup={eg}></EventCard>
        ))}
        <br />
      </div>
    </div>
  )
}

Overview.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

function EventCard({ eventGroup }: { eventGroup: EventGroup }) {
  return (
    <div className="border border-l-8 border-red-600 p-4 mt-8">
      <div className="flex justify-between items-baseline mb-2">
        <div className="font-bold text-2xl">{eventGroup.title}</div>
        <div className="text-gray-500">{eventGroup.created_at}</div>
      </div>
      <div>{eventGroup.trace}</div>
    </div>
  )
}
