import React from 'react'
import NavBar from './NavBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto font-sans">{children}</div>
    </div>
  )
}
