import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/style.scss"

const IndexPage = () => (
  <div>
  <Layout>
    <Header />
    <Landing />
    <About />
    <Experience />
    <Skills />
    <Footer />
  </Layout>
  </div>
);

export default IndexPage;
