import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

export const tosErrorMessageForType = () => {
  return 'Please accept the TOS.'
}

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <Header />
      <div className="w-full mt-10 sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="h-full flex flex-col items-center justify-center mx-6 sm:w-1/2 lg:w-2/6">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-center mt-6 sm:mb-1">404</h1>
            <p className="text-2xl mb-3 font-bold">Uh Oh! There&apos;s nothing here!</p>
            <Image src="/assets/404.svg" width={675} height={431} alt="404" />
            <div className="flex text-2xl mt-3">
              <p className="font-bold">Go back</p>
              <Link href="/">
                <a className="text-primary hover:text-secondary ml-1 font-bold">Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
