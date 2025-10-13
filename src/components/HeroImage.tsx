import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HeroImage.module.css'
import forest from '../../public/assets/photos/forest-unsplash.jpg'

const HeroImage = () => {
  return (
    <div className={styles.heroContainer}>
        <Image src={forest} className={styles.heroImage} alt='Forest' priority height={3078} width={5472} />
    </div>
  )
}

export default HeroImage