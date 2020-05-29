import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/style.scss"

const IndexPage = () => (
  <div>
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
  </div>
);

export default IndexPage;
