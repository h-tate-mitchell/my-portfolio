import React from 'react'
import Page from '@/components/Page'
import { useRouter } from 'next/router'
import { projects } from '@/data/projects'
import Link from 'next/link'
import styles from "@/styles/Home.module.css"

const projectId = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <Page title={`Project ${id}`}>
            {projects.some(project => project.id.toString() === id) ?
            projects.filter(project => project.id.toString() === id).map(project =>
                <div key={project.id.toString()}>
                    <h1>{project.title}</h1>
                    <section>
                        <h2>Challenge</h2>
                        <p>{project.challenge}</p>
                    </section>
                    <section>
                        <h2>Approach</h2>
                        <p>{project.approach}</p>
                    </section>
                    <section>
                        <h2>Impact</h2>
                        <p>{project.impact}</p>
                    </section>
                    <section>
                        <h2>Technologies</h2>
                        <p>{project.technologies.join(', ')}</p>
                    </section>
                </div>)

            : <>
                 Oops Project {id} not found.
            </>

            }
            <div className={styles.interiorNav}>
                <Link href="/projects">Back to Projects</Link>
            </div>
        </Page>
    )
}

export default projectId