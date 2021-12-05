import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'

const Home: NextPage = () => {
  const router = useRouter();
  const { session, user } = useAuth();

  useEffect(() => {
    if(session == null) {
      router.push("/login")
    }
  })

  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <div>
          <p>This page will have all your organizations and their projects.</p>
      </div>
    </>
  )
}

export default Home