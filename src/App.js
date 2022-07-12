import React, {Fragment} from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';

import './styles/App.css'


const App = () => {
  return (
    <Fragment>
      <NavBar/>
      <Banner/>
      <Footer/>
    </Fragment>
  )
}

export default App