import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '../public/Icon.png'
import { UserCircleIcon, LogoutIcon } from '@heroicons/react/outline'

export default function NavBar() {
  const [optionsMenu, setoptionsMenu] = useState(false)
  return (
    <div className="flex flex-row justify-between m-4 text-gray-800 border-b">
      <Link href="/">
        <a className="font-bold text-2xl self-center mx-8">Custodi</a>
      </Link>
      <div className="flex flex-row justify-end px-7">
        <Link href="/">
          <a className="font-semibold text-xl self-center mx-12">Docs</a>
        </Link>
        <Image
          src={Icon}
          alt="User profile photo"
          width={42}
          height={42}
          className="rounded-full"
          onClick={() => {
            setoptionsMenu(!optionsMenu)
          }}
        />
        {optionsMenu && (
          <div className="absolute my-10 border flex flex-col rounded-lg border-primary bg-white p-1">
            <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
              <Link href="/">
                <a className="flex">
                  <UserCircleIcon className="h-6 w-6" />
                  <span className="font-semibold text-sm ml-2">Account Settings</span>
                </a>
              </Link>
            </div>
            <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
              <Link href="/">
                <a className="flex">
                  <LogoutIcon className="h-6 w-6" />
                  <span className="font-semibold text-sm ml-2">Logout</span>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
