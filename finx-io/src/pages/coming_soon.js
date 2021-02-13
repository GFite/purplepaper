import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const ComingSoonPage = props => (
  <Layout path={props.location.pathname}>
    <BG />
    <SEO title="FINX is in Seed Token Raise. Learn more at the <a href='/token_sale'>Token Sale Page</a>" path={props.location.pathname} />
    <div style={{maxWidth: 1440, padding: 32,margin: 'auto'}}>
      <h1>Coming Soon</h1>
      <p>You just found a page that doesn&#39;t exist yet but it will be very soon.</p>
    </div>
  </Layout>
)

export default ComingSoonPage
