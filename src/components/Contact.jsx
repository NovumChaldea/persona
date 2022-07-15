import React from 'react'
import styles from '../styles/Contact.module.css';
import { BsGithub, BsFacebook, BsWhatsapp, BsReddit } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className={styles.structure}>
      <h1>My plataforms</h1>
      <div className={styles.icons}>
        <BsGithub/>
        <BsFacebook/>
        <BsWhatsapp/>
        <BsReddit/>
      </div>
    </div>
  )
}

export default Contact