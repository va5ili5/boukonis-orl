import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/home/slider';
import About from '../components/home/about';
import Clinic from '../components/home/clinic';
import Coops from '../components/home/coops';
import Surgeries from '../components/home/surgeries';
import Articles from '../components/home/articles';
import GMap from '../components/home/gmap';
const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" />
    <Slider/>
    <About/>
    <Clinic/>
    <Coops/>
    <Surgeries/>
    <Articles/>
    <GMap/>
  </Layout>
)

export default IndexPage
