import React from 'react';
import styles from '../styles/Slideshow.module.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import FlechaIzquierda from '../assets/iconmonstr-angel-left-thin.svg';
import FlechaDerecha from '../assets/iconmonstr-angel-right-thin.svg'

const Slideshow = () => {
  return (
    <div>
        <div className={styles.container}>
            <a href="https://www.google.com" className={styles.slide}>
                <img src={img1} alt="" />
            </a>
        </div>
        <div>
            <a href="https://www.google.com">
                <img src={img2} alt="" />
            </a>
        </div>
        <div>
            <a href="https://www.google.com">
                <img src={img3} alt="" />
            </a>
        </div>
        <div>
            <a href="https://www.google.com">
                <img src={img4} alt="" />
            </a>
        </div>
        <div>
            <button>
                <img src={FlechaIzquierda} alt=""/>
            </button>
            <button>
                <img src={FlechaDerecha} alt=""/>
            </button>
        </div>
    </div>
  )
}

export default Slideshow