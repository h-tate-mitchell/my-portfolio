import React from 'react'
import Page from '@/components/Page'
import Link from 'next/link'
import { projects as projectsData } from '@/data/projects'

const projects = () => {
  return (
    <Page title='Projects | H. Tate Mitchell'>
        <h1>Projects</h1>
        <div>
            <ul>
                { projectsData.map(project => (
                    <li key={project.id.toString()}><Link href={`/project/${project.id}`}>{project.title}</Link></li>
                ))}
                <li><Link href={`/project/1232`}>Broken Link</Link></li>
            </ul>
        </div>
    </Page>
  )
}

export default projects