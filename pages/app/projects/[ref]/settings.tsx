import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import { paths } from '../../../../utils/paths'

const ProjectSettings: NextPage = () => {
  const router = useRouter()
  const { session } = useAuth({ nonLoggedInRedirect: paths.login() })

  useEffect(() => {
    if (session == null) {
      router.push(paths.login())
    }
  })

  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <div>
        <p>This page will have the project settings!</p>
      </div>
    </>
  )
}

export default ProjectSettings
