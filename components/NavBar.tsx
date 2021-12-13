import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { UserCircleIcon, LogoutIcon } from '@heroicons/react/outline'
import { useClient } from 'react-supabase'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/useAuth'
import { paths } from '../utils/paths'

export default function NavBar() {
  const supabase = useClient()
  const [showOptionsMenu, setShowOptionsMenu] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  return (
    <div className="flex flex-row justify-between p-4 text-gray-800 border-b">
      <div className="flex">
        <div className="w-7 lg:w-11">
          <Image
            src="/assets/custodi-logo-62.svg"
            alt="Custodi Logo"
            width={42}
            height={42}
            className="rounded-full cursor-pointer"
            onClick={() => {
              router.push('/')
            }}
          />
        </div>
        <Link href="/">
          <a className="font-bold text-xl lg:text-2xl self-center mx-3">Custodi</a>
        </Link>
      </div>

      <div className="flex flex-row justify-end lg:px-7">
        <Link href={paths.docs()}>
          <a className="font-semibold text-xl self-center mx-12 hover:text-indigo-400">Docs</a>
        </Link>
        {user && (
          <span className="self-center w-0 sm:w-auto sm:mr-6 invisible sm:visible">
            {user.email}
          </span>
        )}
        <div className="w-7 lg:w-11 flex">
          <Image
            src="/assets/avatar-placeholder.svg"
            alt="User profile photo"
            width={42}
            height={42}
            className="rounded-full cursor-pointer"
            onClick={() => {
              setShowOptionsMenu(!showOptionsMenu)
            }}
          />
        </div>

        {showOptionsMenu && (
          <div
            className="absolute my-10 border flex flex-col rounded-lg border-primary bg-white p-1"
            onMouseLeave={() => setShowOptionsMenu(false)}
          >
            <div className="m-0.5 mx-1 flex text-center cursor-pointer hover:opacity-60">
              <a className="flex" onClick={() => router.push(paths.accountSettings())}>
                <UserCircleIcon className="h-6 w-6" />
                <span className="font-semibold text-sm ml-2 ">Account Settings</span>
              </a>
            </div>
            <div className="m-0.5 mx-1 flex text-center cursor-pointer hover:opacity-60">
              <a className="flex">
                <LogoutIcon className="h-6 w-6" />
                <span
                  className="font-semibold text-sm ml-2"
                  onClick={async () => await supabase.auth.signOut()}
                >
                  Logout
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
