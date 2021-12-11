import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../components/AuthProvider'

export function useAuth(redirectToLogin = false) {
  const context = useContext(AuthContext)
  const router = useRouter()

  // If user is not logged in and we tried to use this hook, redirect to login
  useEffect(() => {
    if (redirectToLogin && !context.isLoading && !context.session) {
      router.push('login')
    }
  }, [router, context.isLoading, context.session, redirectToLogin])

  if (context === undefined) throw Error('useAuth must be used within AuthProvider')
  return context
}
