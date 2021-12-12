import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import DashboardLayout from '../../../../components/DashboardLayout'
import { useAuth } from '../../../../hooks/useAuth'
import { paths } from '../../../../utils/paths'

const ProjectSettings = () => {
  const router = useRouter()
  const { session } = useAuth({ nonLoggedInRedirect: paths.login() })

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

ProjectSettings.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
