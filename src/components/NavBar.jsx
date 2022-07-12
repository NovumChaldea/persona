import React, { Fragment } from 'react'
import { VscSettingsGear } from 'react-icons/vsc';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Fragment>
        <div className={styles.nav}>
            <div className={styles.left}>
                <VscSettingsGear className={styles.heartIcon}/>
            </div>
            <div className={styles.right}>
                <h3>About Me</h3>
                <h3>Projects</h3>
                <h3>Contact!</h3>
            </div>
        </div>
        
    </Fragment> 
  )
}

export default NavBar