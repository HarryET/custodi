import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '../public/Icon.png'
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
      <Link href="/">
        <a className="font-bold text-2xl self-center mx-8">Custodi</a>
      </Link>
      <div className="flex flex-row justify-end px-7">
        <Link href={paths.docs()}>
          <a className="font-semibold text-xl self-center mx-12">Docs</a>
        </Link>
        {user && <span className="self-center mr-6">{user.email}</span>}
        <Image
          src={Icon}
          alt="User profile photo"
          width={42}
          height={42}
          className="rounded-full"
          onClick={() => {
            setShowOptionsMenu(!showOptionsMenu)
          }}
        />
        {showOptionsMenu && (
          <div
            className="absolute my-10 border flex flex-col rounded-lg border-primary bg-white p-1"
            onMouseLeave={() => setShowOptionsMenu(false)}
          >
            <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
              <a className="flex" onClick={() => router.push(paths.accountSettings())}>
                <UserCircleIcon className="h-6 w-6" />
                <span className="font-semibold text-sm ml-2">Account Settings</span>
              </a>
            </div>
            <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
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
