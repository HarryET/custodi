import 'tailwindcss/tailwind.css'
import '../styles/reset.css'
import type { AppProps } from 'next/app'
import {
  NEXT_PUBLIC_SUPABASE_URL,
  IS_SERVER,
  SUPABASE_SERVICE_KEY,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
} from '../env'
import { createClient } from '@supabase/supabase-js'
import { Provider as SupabaseProvider } from 'react-supabase'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../components/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextComponentType } from 'next'
import { ReactNode } from 'react'

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  IS_SERVER ? SUPABASE_SERVICE_KEY : NEXT_PUBLIC_SUPABASE_ANON_KEY
)
const queryClient = new QueryClient()

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType & { getLayout: (children: ReactNode) => ReactNode }
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider value={supabase}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        <Toaster />
      </SupabaseProvider>
    </QueryClientProvider>
  )
}

export default App
