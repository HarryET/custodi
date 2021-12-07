import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const Home: NextPage = () => {
  const router = useRouter()
  const { session } = useAuth()

  // TODO add landing screen?
  useEffect(() => {
    if (session != null) {
      router.push('/app')
    } else {
      router.push('/login')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
    </>
  )
}

export default Home
