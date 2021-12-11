import { Session, User } from '@supabase/gotrue-js'
import { createContext, useEffect, useState } from 'react'
import { useAuthStateChange, useClient } from 'react-supabase'

type AuthContextType = {
  session: Session | null
  user: User | null
}

const initialState = { session: null, user: null }
export const AuthContext = createContext<AuthContextType>(initialState)

export const AuthProvider: React.FC = ({ children }) => {
  const client = useClient()
  const [state, setState] = useState<AuthContextType>(initialState)

  useEffect(() => {
    const session = client.auth.session()
    setState({ session, user: session?.user ?? null })
  }, [])

  useAuthStateChange((event, session) => {
    console.log(`Supbase auth event: ${event}`, session)
    setState({ session, user: session?.user ?? null })
  })

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
