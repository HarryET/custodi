import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type RegisterInputs = {
  email: string
  password: string
  tos: boolean
}

export const tosErrorMessageForType = (type: string) => {
  return "Please accept the TOS."
}

const Register: NextPage = () => {

  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      {/* TODO: add navbar */}
      <div className="w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="h-full flex flex-col items-center justify-center mx-6 sm:w-1/2 lg:w-2/6">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-center mt-6 sm:mb-1">404</h1>
            <p className="mb-3 font-bold">Uh Oh! There’s nothing here!</p>
            <Image src='/404.png' width={400} height={307} />
            <div className='flex mt-3'>
                <p className='font-bold'>Go back</p>
                <Link href='/'>
                    <a className='text-primary hover:text-secondary ml-1 font-bold'>Home</a>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
