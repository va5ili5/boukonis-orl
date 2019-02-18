import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Topbar from './shared/topbar';
import Header from './shared/header'
import Footer from './shared/footer';
import Credits from './shared/credits';
import '../sass/boukonis-orl.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Topbar />
        <Header />
          {children}
        <Footer />
        <Credits/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
