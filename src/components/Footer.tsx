import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
        
        <ul className={styles.buttons}>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/projects'>Projects</Link>
            </li>
            {/* <li>
                <Link href='/cv'>CV</Link>
            </li> */}
        </ul>
        <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/harrison-mitchell-2130a712b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>
            <Link href="https://github.com/h-tate-mitchell" target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
            <Link href="mailto:htatemitchell@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></Link>
        </div>
        <p className={styles.text}>
            H. Tate Mitchell © {new Date().getFullYear()}
        </p>
    </div>
  )
}

export default Footer