import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HeroImage.module.css'
import forest from '../../public/assets/photos/forest-paul-pastourmatzis.jpg'

const HeroImage = () => {
  return (
    <div className={styles.heroContainer}>
        <Image src={forest} className={styles.heroImage} alt='Forest' priority />
    </div>
  )
}

export default HeroImage