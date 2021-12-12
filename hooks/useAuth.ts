import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../components/AuthProvider'

/** Access user context, which includes isLoading, Session, and User
 * @param loggedInRedirect - If a user is logged in, redirect to this path
 * @param nonLoggedInRedirect - If a user is NOT logged in, redirect to this path
 */
export function useAuth({
  loggedInRedirect,
  nonLoggedInRedirect,
}: {
  loggedInRedirect?: string
  nonLoggedInRedirect?: string
} = {}) {
  const context = useContext(AuthContext)
  const router = useRouter()

  // If user is not logged in and we tried to use this hook, redirect to login
  useEffect(() => {
    if (nonLoggedInRedirect && !context.isLoading && !context.session) {
      router.replace(nonLoggedInRedirect)
    } else if (loggedInRedirect && !context.isLoading && context.session) {
      router.replace(loggedInRedirect)
    }
  }, [router, context.isLoading, context.session, nonLoggedInRedirect, loggedInRedirect])

  if (context === undefined) throw Error('useAuth must be used within AuthProvider')
  return context
}
