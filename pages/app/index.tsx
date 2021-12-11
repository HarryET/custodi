import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { useClient } from 'react-supabase'
import { OrganizationWithProjects } from '../../types'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'

export default function Overview() {
  const supabase = useClient()
  useAuth()
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
      <NavBar />
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
              {organizationsWithProjects.map((orgItem, index) => (
                <li key={index} className="mb-10">
                  <div>
                    <label className="text-2xl">{orgItem.name}</label>
                    <ul className="flex flex-row mt-5 ">
                      {orgItem.projects.map((projectItem, index) => (
                        <li
                          key={index}
                          className="border rounded-2xl border-gray-300 px-20 py-12 mr-8"
                        >
                          <div>
                            <label className="text-xl">{projectItem.name}</label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
