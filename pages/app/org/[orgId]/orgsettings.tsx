import Head from 'next/head'
import React, { useState } from 'react'
import { ArrowNarrowLeftIcon, UserCircleIcon } from '@heroicons/react/outline'
import NavBar from '../../../../components/NavBar'
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function OrgSettings() {
  const router = useRouter()
  const [DeleteModal, setDeleteModal] = useState(false)
  const orgName = 'My Org'
  const orgMembers = ['ExampleUser@gmail.com', 'JohnDoe@gmail.com', 'JaneDoe@gmail.com']
  return (
    <>
      <Head>
        <title>Organization Settings</title>
      </Head>
      <NavBar />
      {DeleteModal && (
        <div>
          <div className="fixed h-full w-full top-0 bg-black opacity-70 z-10"></div>
          <div className=" absolute w-screen flex flex-col items-center justify-center h-screen z-20">
            <div className=" bg-white opacity-100 border rounded-2xl flex flex-col items-center justify-center left-1/4 max-w-lg ">
              <label className="p-8 font-semibold text-2xl">Delete this organization?</label>
              <label className="pb-6 text-lg font">
                Deleting your organization is irreversible.
              </label>
              <div className="flex flex-row  w-imgSM justify-evenly pb-10 ">
                <button
                  className="py-2 px-4 w-44 bg-gray-400 text-white rounded-lg hover:bg-gray-600 cursor-pointer transition duration-500 ease-in-out text-sm"
                  onClick={() => setDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="py-2 px-4 w-44 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer transition duration-500 ease-in-out text-sm"
                  onClick={() => ''}
                >
                  Delete Organization
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl container mx-auto flex flex-col items-center justify-center relative">
        <div className="w-3/4 flex flex-row justify-center items-center mt-12 mb-24 relative">
          <div className="w-1/5">
            <button className="items-center">
              <ArrowNarrowLeftIcon className=" h-8 w-8" />
            </button>
          </div>
          <label className=" w-4/5 font-semibold text-4xl">{orgName} Settings</label>
        </div>
        <div className="max-w-lg relative">
          <div className="flex flex-col ">
            <label className="text-lg text-gray-500">Organization Name</label>
            <input
              className="rounded-lg h-10 border-gray-300 border block mb-6 mt-2 pl-1"
              type="text"
              placeholder={orgName}
            ></input>
            <div className="flex flex-row">
              <div className="flex border h-28 w-28 bg-white rounded-full justify-center">
                <Image src="/assets/custodi-logo-62.svg" width={80} height={80} alt="profile picture"/>
              </div>
              <div className="flex flex-col justify-around items-center px-8">
                <label className="text-lg">Organization Avatar</label>
                <button
                  onClick={() => ''}
                  className="py-2 text-sm w-32 bg-primary text-gray-50 rounded-lg hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-lg text-gray-500">Organization Members</label>
            <div className="flex flex-row justify-center items-center">
              <input
                className="rounded-lg h-10 border-gray-300 border block mb-6 mt-2 pl-1 w-3/4"
                placeholder="User Email"
              ></input>
              <div className="w-1/4 mx-auto">
                <button className="text-primary text-3xl mb-6 mx-6" onClick={() => ''}>
                  +
                </button>
              </div>
            </div>
            <ul className="font-semibold text-lg mb-16">
              {orgMembers.map((item, index) => (
                <li key={index} className="m-3 flex flex-row items-center">
                  <UserCircleIcon className="w-6 h-6 mr-4" />
                  <label>{item}</label>
                </li>
              ))}
            </ul>
          </div>
          <button className="text-red-500 text-sm" onClick={() => setDeleteModal(true)}>
            Delete Organization
          </button>
        </div>
      </div>
    </>
  )
}
