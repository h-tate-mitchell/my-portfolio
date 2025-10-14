import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { resume } from '@/data/resume'
import { aboutData } from '@/data/about'
import styles from '@/styles/About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const about = () => {
  return (
    <Page title='About | H. Tate Mitchell'>
        <h1>About</h1>
        <p>BRIEF. Hi, my name is Harrison Mitchell. I am SEO-Guy, I can do the work, hire me. Give palatable buzzwords. I am amped to do this. Fit in, enjoy working with them, dependable, don't need handholding.</p>
        <p>I am from the PNW, but currently live in eastern Idaho.</p>
        <h2>Professional Summary</h2>
        <p>{ resume.proSummary }</p>
        <h2>Hobbies</h2>
        <p>Background, where im from, what I like and what I am passionate about, I am a cool, relatable human. Don't let this overshadow the work stuff.</p>
        <div className={styles.socials}>
          <Link href="https://www.linkedin.com/in/harrison-mitchell-2130a712b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>
          <Link href="https://github.com/h-tate-mitchell" target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
          <Link href="mailto:htatemitchell@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></Link>
        </div>
    </Page>
  )
}

export default about