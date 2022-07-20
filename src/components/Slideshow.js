import React from 'react';
import styles from '../styles/Slideshow.module.css';
import dummy from '../assets/dummy.jpg';

const Slideshow = () => {
  return (
    <div>
        <div>
            <a href="https://www.google.com">
                <img src={dummy} alt="" className={styles.images}/>
            </a>
        </div>
        <div>Controls</div>
    </div>
  )
}

export default Slideshow