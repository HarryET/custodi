import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <Header />
      <section className="w-full mt-20 sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="px-10 container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl md:text-5xl text-3xl mb-4 font-bold text-gray-800">
              Custodi
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The open source Sentry alternative.
            </p>
            <div className="flex justify-center">
              <Link href="/login" passHref>
                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
                  Get Started
                </button>
              </Link>
              <Link href="/doc" passHref>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Documentation
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid justify-items-center">
            <img
              className="object-cover object-center rounded h-imgSM"
              alt="hero"
              src="/assets/product-demo-img.jpg"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
