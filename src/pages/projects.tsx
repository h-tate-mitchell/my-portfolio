import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { projects as projectsData } from '@/data/projects'
import styles from "@/styles/Projects.module.css"
import ProjectCard from '@/components/ProjectCard'

const projects = () => {
  return (
    <Page title='Projects | H. Tate Mitchell'>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.cardContainer}>
            { projectsData.map(project => (
              <ProjectCard project={project} key={project.id.toString()} />
            ))}
        </div>
        
        {/* <div>
            <ul>
                { projectsData.map(project => (
                    <li key={project.id.toString()}><Link href={`/project/${project.id}`}>{project.title}</Link></li>
                ))}
                <li><Link href={`/project/1232`}>Broken Link</Link></li>
            </ul>
        </div> */}
        
    </Page>
  )
}

export default projects