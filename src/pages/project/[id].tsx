import React from 'react'
import Page from '@/components/Page'
import { useRouter } from 'next/router'
import { projects } from '@/data/projects'
import Button from '@/components/Button'
import styles from "@/styles/ProjectDetail.module.css"

const projectId = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <Page title={`Project ${id} | H. Tate Mitchell`}>
            {projects.some(project => project.id.toString() === id) ?
            projects.filter(project => project.id.toString() === id).map(project =>
                <article key={project.id.toString()} className={styles.pageContainer}>
                        <div className={styles.textContainer}>
                            <h1>{project.title}</h1>
                            <section>
                                <h2>Summary</h2>
                                <p>{project.summary}</p>
                            </section>
                            <section>
                                <h2>Background</h2>
                                <p>{project.background}</p>
                            </section>
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
                            <section className={styles.finalSection}>
                                <h2>Technologies</h2>
                                <p>{project.technologies.join(', ')}.</p>
                            </section>
                            <div className={styles.interiorNav}>
                                <Button className="default" url="/projects">Back to Projects</Button>
                            </div>
                        </div>
                        <div className={styles.imageContainer} style={{ backgroundImage: `url(${project.imagePath})` }} >
                            &nbsp;
                        </div>
                    </article>)

            : <>
                 Oops Project {id} not found.
            </>

            }
        </Page>
    )
}

export default projectId