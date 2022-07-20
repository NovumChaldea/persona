import React, { Fragment } from 'react';
import styles from '../styles/Carousel.module.css';
import Slideshow from './Slideshow';
//The carousel need to be reactive and in a loop
//The carousel´s section must be wide and centric

const Carousel = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <Slideshow/>
      </div>
    </Fragment>
  )
}

export default Carousel