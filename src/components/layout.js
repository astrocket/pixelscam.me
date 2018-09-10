import React from 'react'
import Nav from './nav'
import Head from './head'

const Layout = ({ title, children }) => {
  return (
    <div className="app-container">
        <Head title={title} />
        {/* <Nav /> */}
        {children}
    </div>
  )
}

export default Layout