import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio tenetur ipsum, praesentium temporibus natus in eligendi omnis quam tempora iure, aspernatur cupiditate inventore. Ipsa facere repellendus sunt tempora voluptate.</h1>
        <h3 className={styles.littleText}>Little text here</h3>
      </div>
    </div>
  )
}

export default Banner