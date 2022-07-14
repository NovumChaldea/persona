import React  from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';

import styles from './styles/App.module.css'


const App = () => {
  return (
    <div className={styles.background}>
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App