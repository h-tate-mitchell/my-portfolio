import React from 'react'
import styles from '@/styles/ImageFootTransition.module.css'

const ImageFootTransition = () => {
  return (
    <div 
      className={styles.imageTransition} 
      style={{
        backgroundImage: `url('/assets/photos/forest-2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
    </div>
  )
}

export default ImageFootTransition