import React  from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About  from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';

import styles from './styles/App.module.css'


const App = () => {
  return (
    <div className={styles.background}>
      <NavBar/>
      <Banner/>
      <About/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App