import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

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
        </ul>
        <p className={styles.text}>
            H. Tate Mitchell © {new Date().getFullYear()}
        </p>
    </div>
  )
}

export default Footer