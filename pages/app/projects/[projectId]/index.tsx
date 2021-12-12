import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/DashboardLayout'
import { useAuth } from '../../../../hooks/useAuth'
import { paths } from '../../../../utils/paths'

const Project = () => {
  useAuth({ nonLoggedInRedirect: paths.login() })
  const router = useRouter()
  const projectId = router.query.eventId as string

  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <div>
        <p>This page will have an overview of a specific project!</p>
        <Link href={paths.events(projectId)}>
          <a className="text-primary">Events for this project</a>
        </Link>
      </div>
    </>
  )
}

export default Project

Project.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
