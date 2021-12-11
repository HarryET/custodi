import { Session, User } from '@supabase/gotrue-js'
import { createContext, useEffect, useState } from 'react'
import { useAuthStateChange, useClient } from 'react-supabase'

type AuthContextType = {
  session: Session | null
  user: User | null
  isLoading: boolean
}

const initialState: AuthContextType = { session: null, user: null, isLoading: true }
export const AuthContext = createContext<AuthContextType>(initialState)

export const AuthProvider: React.FC = ({ children }) => {
  const client = useClient()
  const [state, setState] = useState<AuthContextType>(initialState)

  useEffect(() => {
    const session = client.auth.session()
    setState({ session, user: session?.user ?? null, isLoading: false })
  }, [client.auth])

  useAuthStateChange((event, session) => {
    setState({ session, user: session?.user ?? null, isLoading: false })
  })

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
