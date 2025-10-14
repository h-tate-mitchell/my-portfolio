import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { aboutData } from '@/data/about'
import styles from '@/styles/About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const about = () => {
  return (
    <Page title='About | H. Tate Mitchell'>
        <h1>About Me</h1>
        <p>{aboutData.main}</p>
        <h2>Professional Summary</h2>
        <p>{ aboutData.proSummary }</p>
        <h2>Other Things</h2>
        <p>{aboutData.other}</p>
        <hr style={{ width: '80%' }}/>
        <div className={styles.socials}>
          <Link href="https://www.linkedin.com/in/harrison-mitchell-2130a712b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>
          <Link href="https://github.com/h-tate-mitchell" target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
          <Link href="mailto:htatemitchell@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></Link>
        </div>
    </Page>
  )
}

export default about