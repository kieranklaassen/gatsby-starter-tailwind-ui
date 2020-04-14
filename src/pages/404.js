import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

      <div className="flex flex-wrap content-center justify-center w-screen h-screen antialiased bg-gray-600">
        <p className="font-sans text-6xl text-white error-text">
          404: Page not found
        </p>
      </div>

      <div className="absolute bottom-0 w-screen mb-6 font-sans text-xl text-center text-white">
        <span className="mr-2 text-gray-200">Take me back to</span>
        <Link className="border-b text-gray-50" to="/">
          the homepage
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
