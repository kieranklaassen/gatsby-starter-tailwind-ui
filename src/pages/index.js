import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      {/* Add content here */}
    </Layout>
  )
}

export default IndexPage
