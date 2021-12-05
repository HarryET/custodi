import 'tailwindcss/tailwind.css'
import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { NEXT_PUBLIC_SUPABASE_URL, IS_SERVER, SUPABASE_SERVICE_KEY, NEXT_PUBLIC_SUPABASE_ANON_KEY } from '../env';
import { createClient } from "@supabase/supabase-js";
import {Provider as SupabaseProvider} from "react-supabase";
import { Toaster } from 'react-hot-toast';

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  IS_SERVER ? SUPABASE_SERVICE_KEY : NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SupabaseProvider value={supabase}>
      <Component {...pageProps} />
      <Toaster />
    </SupabaseProvider>
  )
}

export default App
