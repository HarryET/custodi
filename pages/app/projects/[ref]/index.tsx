import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../../../hooks/useAuth'

const Project: NextPage = () => {
  const router = useRouter()
  const { session } = useAuth()

  useEffect(() => {
    if (session == null) {
      router.push('/login')
    }
  })

  return (
    <>
      <Head>
        <title>Custodi</title>
      </Head>
      <div>
        <p>This page will have an overview of a specific project!</p>
      </div>
    </>
  )
}

export default Project
