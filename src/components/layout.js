import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
