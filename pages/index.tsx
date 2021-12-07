import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full flex flex-row items-center justify-end space-x-4">
          {/* Header */}
          <Link href="/docs">
            <p className="hover:text-secondary hover:underline cursor-pointer">Docs</p>
          </Link>
          <Link href="https://supabase.com/blog/2021/12/03/supabase-holiday-hackdays-hackathon">
            <p className="hover:text-supabase hover:underline cursor-pointer">Supabase Hackathon</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto pt-6 md:h-full md:flex-row">
          <div className="md:w-1/2">
            <div>
              {/* Title & Description */}
              <h1 className="text-6xl font-bold text-center">Custodi</h1>
              <p className="text-lg text-center">The open source Sentry alternative.</p>
            </div>
            <div className="my-6 w-full flex flex-col items-center justify-center">
              <div className="px-8 py-2 bg-primary hover:bg-secondary text-white rounded">
                <Link href="/register">
                  Get Started
                </Link>
              </div>
              <div>
                <p>or <span className="text-primary hover:text-secondary hover:underline"><Link href="/login">Login</Link></span></p>
              </div>
            </div>
          </div>
          <div className="mb-6 mx-6 md:h-1/6 md:w-auto md:m-12">
            {/* Video/Image */}
            <img src={"/assets/product-demo-img.jpg"} alt={"Placeholder Photo by Katarzyna Modrzejewska"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
