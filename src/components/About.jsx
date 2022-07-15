import React, { Fragment } from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <Fragment >
      <div className={styles.box}>
        <div className={styles.container}>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quae facere laudantium exercitationem est quibusdam perspiciatis quas eos voluptate, ex asperiores necessitatibus fuga. Quasi, a voluptatum maiores quos nisi soluta.</h3>
          <img></img>
        </div>
        <div className={styles.container}>
          <img></img>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe id! Eos, possimus quisquam quibusdam incidunt quae facilis consequatur assumenda saepe delectus, exercitationem, optio necessitatibus suscipit fugit ab cum! Maxime.</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default About;