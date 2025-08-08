import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
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
    </div>
  )
}

export default Navbar