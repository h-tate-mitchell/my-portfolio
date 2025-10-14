import React from 'react'
import Link from 'next/link'
import styles from '@/styles/ProjectCard.module.css'
import Image from 'next/image'
import { truncateText } from '@/utils/truncateText'

type ProjectCardProps = {
    project: {
        id: number;
        title: String;
        background: string;
        challenge: String;
        approach: String;
        impact: String;
        technologies: String[];
        imagePath: string;
        imageAlt: string;
    }
}

const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;
  return (
    <Link href={`/project/${project.id}`} className={styles.link}>
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image 
                    src={project.imagePath}
                    alt={project.imageAlt}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>
            <div className={styles.textContainer}>
                <h2>{project.title}</h2>
                <p>{truncateText(project.background, 26)}</p>
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard