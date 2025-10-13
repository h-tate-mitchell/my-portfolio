import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { resume } from '@/data/resume'
import { aboutData } from '@/data/about'
import styles from '@/styles/About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const about = () => {
  return (
    <Page title='About | H. Tate Mitchell'>
        <h1>About</h1>
        <p>Hi, my name is Harrison Mitchell. I am from the PNW, but currently live in eastern Idaho.</p>
        <h2>Professional Summary</h2>
        <p>{ resume.proSummary }</p>
        <h2>Hobbies</h2>
        <p>My hobbies include { aboutData.hobbies.join(', ') }.</p>
        <div className={styles.socials}>
          <Link href="https://www.linkedin.com/in/harrison-mitchell-2130a712b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>
          <Link href="https://github.com/h-tate-mitchell" target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
          <Link href="mailto:htatemitchell@gmail.com" target='_blank'><FontAwesomeIcon icon={faGoogle} className={styles.icon} /></Link>
        </div>
    </Page>
  )
}

export default about