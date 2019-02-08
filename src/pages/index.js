import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/home/slider';
import About from '../components/home/about';
import Clinic from '../components/home/clinic';
import Coops from '../components/home/coops';
import Services from '../components/home/services';
const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" />
    <Slider/>
    <About/>
    <Clinic/>
    <Coops/>
    <Services/>
  </Layout>
)

export default IndexPage
