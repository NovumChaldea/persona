import React  from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About  from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import styles from './styles/App.module.css';
//It's important to create a container to contrast the background from the sections

const App = () => {
  return (
    <div className={styles.background}>
      <NavBar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App;