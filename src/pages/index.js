import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'
import Slider from '../components/home/slider';
import About from '../components/home/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" />
    <Slider/>
    <About/>
  </Layout>
)

export default IndexPage
