import Link from 'next/link'

const Header = () => {
  return (
    <div className="text-gray-800 pt-4 px-10 flex justify-between">
      <h1 className="text-xl font-bold">Custodi</h1>
      <div>
        <Link href="/">
          <a className="hover:text-primary mr-3">Docs</a>
        </Link>
        <a
          href="https://supabase.com/blog/2021/12/03/supabase-holiday-hackdays-hackathon"
          className="hover:text-supabase ml-3"
        >
          Supabase Hackathon
        </a>
      </div>
    </div>
  )
}

export default Header
