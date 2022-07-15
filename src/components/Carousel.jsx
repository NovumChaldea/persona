import React, { Fragment } from 'react';
import styles from '../styles/Carousel.module.css';

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