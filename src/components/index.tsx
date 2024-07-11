import React from 'react'
import Navbar from './header/Navbar'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="h-min-screen">
      <Navbar />
      {page}
    </div>
  )
}
