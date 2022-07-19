import React, { Fragment } from 'react';
import styles from '../styles/Carousel.module.css';
//The carousel need to be reactive and in a loop
//The carousel´s section must be wide and centric

const Carousel = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.carouselContainer}>Here be a Carousel</div>
      </div>
    </Fragment>
  )
}

export default Carousel