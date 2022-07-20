import React from 'react';
import styles from '../styles/Slideshow.module.css';
import img1 from '../assets/1.jpg';
import FlechaIzquierda from '../assets/iconmonstr-angel-left-thin.svg';
import FlechaDerecha from '../assets/iconmonstr-angel-right-thin.svg'

const Slideshow = () => {
  return (
    <div>
        <div>
            <a href="https://www.google.com">
                <img src={img1} alt="" />
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