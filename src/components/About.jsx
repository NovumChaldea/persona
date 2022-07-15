import React, { Fragment } from 'react';
import styles from '../styles/About.module.css';
import dummy from '../assets/dummy.jpg'

const About = () => {
  return (
    <Fragment >
      <div className={styles.box}>
        <div className={styles.container}>
          <h3 className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quae facere laudantium exercitationem est quibusdam perspiciatis quas eos voluptate, ex asperiores necessitatibus fuga. Quasi, a voluptatum maiores quos nisi soluta.</h3>
          <img className={styles.image} src={dummy} alt="// eslint-disable-next-line" />
        </div>
        <div className={styles.container}>
          <img className={styles.image} src={dummy}  />
          <h3 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe id! Eos, possimus quisquam quibusdam incidunt quae facilis consequatur assumenda saepe delectus, exercitationem, optio necessitatibus suscipit fugit ab cum! Maxime.</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default About;