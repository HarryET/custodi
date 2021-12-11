import Head from 'next/head'
import React, { useState } from 'react'
import Router from 'next/router'
import NavBar from '../components/NavBar'
import Link from 'next/link'

export default function Overview() {
  const [ExistingOrgs, setExistingOrgs] = useState(false) //replacement until we add the user.organization and user.projects parameters
  const orgArray = ['Org Name', 'Org Name 2']
  const projectArray = ['Project Name', 'Project Name 2', 'Project Name 3']

  return (
    <div>
      <Head>
        <title>Organization Overview</title>
      </Head>
      <NavBar />
      <div className="max-w-5xl mx-auto font-sans">
        <div className="text-semibold mt-20 mb-5">
          <h1 className=" text-4xl mt-20 mb-11 ">Organizations</h1>
          <button
            value={''}
            onClick={() => {
              Router.push('/')
            }}
            className="text-lg border bg-primary text-white px-3 py-1 rounded-lg"
          >
            + New Organization
          </button>
          <button
            onClick={() => {
              setExistingOrgs(!ExistingOrgs)
            }}
          >
            State change
          </button>
        </div>

        <br />
        {!ExistingOrgs && (
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

        {ExistingOrgs && (
          <div>
            {/* MAP AN ARRAY TO DISPLAY SEVERAL ORGS and THE PROJECTS OF THOSE ORGS */}
            <ul className="flex flex-col">
              {orgArray.map((orgItem, index) => (
                <li key={index} className="mb-10">
                  <div>
                    <label className="text-2xl">{orgItem}</label>
                    <ul className="flex flex-row mt-5 ">
                      {projectArray.map((projectItem, index) => (
                        <li
                          key={index}
                          className="border rounded-2xl border-gray-300 px-20 py-12 mr-8"
                        >
                          <div>
                            <label className="text-xl">{projectItem}</label>
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
