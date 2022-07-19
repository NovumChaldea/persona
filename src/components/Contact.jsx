import React from 'react'
import styles from '../styles/Contact.module.css';
import { BsGithub, BsFacebook, BsWhatsapp, BsReddit } from 'react-icons/bs';
//The Contact Whatsapp icon must redirect to the "Send a message" option re-linked to my phone number

const Contact = () => {
  return (
    <div className={styles.structure}>
      <h1 className={styles.title}>My plataforms</h1>
      <div className={styles.icons}>
        <BsGithub className={styles.github}/>
        <BsFacebook className={styles.facebook}/>
        <BsWhatsapp className={styles.whatsapp}/>
        <BsReddit className={styles.reddit}/>
      </div>
    </div>
  )
}

export default Contact