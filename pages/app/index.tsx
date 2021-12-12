import Head from 'next/head'
import React from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { useClient } from 'react-supabase'
import { OrganizationWithProjects } from '../../types'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { paths } from '../../utils/paths'
import DashboardLayout from '../../components/DashboardLayout'

export default function Overview() {
  const supabase = useClient()
  const router = useRouter()
  useAuth({ nonLoggedInRedirect: paths.login() })
  const { data: organizationsRes } = useQuery(
    'organizations',
    async () =>
      await supabase.from<OrganizationWithProjects>('organizations').select('*, projects(*)')
  )

  const organizationsWithProjects = organizationsRes?.data

  return (
    <div>
      <Head>
        <title>Organization Overview</title>
      </Head>
      <div className="max-w-5xl mx-auto font-sans">
        <div className="text-semibold mt-20 mb-5">
          <h1 className=" text-4xl mt-20 mb-11 ">Organizations</h1>
          <Button
            value={''}
            onClick={() => {
              Router.push('/')
            }}
          >
            + New Organization
          </Button>
        </div>

        <br />
        {!organizationsWithProjects && (
          <div className="text-semibold text-2xl font-sans flex flex-col mx-auto justify-center items-center p-3">
            <label>Get started by adding your first organization!</label>
            <label>
              Need help? Check out the{' '}
              <Link href="/">
                <a className="text-primary">docs</a>
              </Link>
            </label>
          </div>
        )}

        {organizationsWithProjects && (
          <div>
            {/* MAP AN ARRAY TO DISPLAY SEVERAL ORGS and THE PROJECTS OF THOSE ORGS */}
            <ul className="flex flex-col">
              {organizationsWithProjects.map((organization) => (
                <li key={organization.id} className="mb-10">
                  <label className="text-2xl">{organization.name}</label>
                  <ul className="flex flex-row mt-5 ">
                    {organization.projects.map((project) => (
                      <li
                        key={project.id}
                        className="border rounded-2xl border-gray-300 px-20 py-12 mr-8 cursor-pointer"
                        onClick={() => router.push(paths.projectOverview(project.id))}
                      >
                        <div>
                          <span className="text-xl">{project.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

Overview.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
