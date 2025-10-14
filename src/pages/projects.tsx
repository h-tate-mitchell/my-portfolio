import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { projects as projectsData } from '@/data/projects'
import styles from "@/styles/Projects.module.css"
import ProjectCard from '@/components/ProjectCard'

const projects = () => {
  return (
    <Page title='Projects | H. Tate Mitchell'>
        <div className={styles.cardContainer}>
          <h1 className={styles.title}>Projects</h1>
          { projectsData.map(project => (
            <ProjectCard project={project} key={project.id.toString()} />
          ))}
        </div>
    </Page>
  )
}

export default projects