import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'
import Icon from '../public/Icon.png'
import UserCircle from '../public/UserCircle.svg'
import Logout from '../public/Logout.svg'

export default function NavBar() {
    const [optionsMenu, setoptionsMenu] = useState(false)
    return(
        <div className="flex flex-row justify-between m-4">
            <Link href="/"><a className="font-bold text-2xl mx-8">Custodi</a></Link>
            <div className="flex flex-row justify-end px-7">
            <Link href="/"><a className="font-semibold text-2xl mx-12">Docs</a></Link>
            <Image src={Icon} alt="User profile photo" width={42} height={42} className="rounded-full" onClick={() => {setoptionsMenu(!optionsMenu)}} />
            {optionsMenu && 
            <div className="absolute my-8 border flex flex-col rounded-lg border-primary bg-white p-1"> 
                <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
                    <Image src={UserCircle} alt="Account Settings" width={24} height={24} /> 
                    <Link href="/">
                        <a className="font-semibold text-sm ml-2">Account Settings</a>
                    </Link>
                </div>
                <div className="m-0.5 mx-1 flex text-center hover:opacity-60">
                    <Image src={Logout} alt="Account Settings" width={24} height={24} />
                    <Link href="/">
                        <a className="font-semibold text-sm ml-2">Log out</a>
                    </Link>
                </div>
            </div>}
            
            </div>
        </div>
    )
}