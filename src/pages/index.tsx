import Head from "next/head"
import Image from "next/image"
import Page from "@/components/Page"
import Button from "@/components/Button"
import Accolades from "@/components/Accolades"
import styles from "@/styles/Home.module.css"
import headshot from '@/assets/photos/headshot.jpeg'

export default function Home() {
  return (
    <Page title="Portfolio Home | H. Tate Mitchell">
      <div className={styles.pageContainer}>
        <div className={styles.textContainer}>
          <h1>Hi, I am Tate</h1>
          <p>I help businesses and entrepreneurs build meaningful digital experiences.</p>
          <Button className="default" url="/projects">Projects</Button>
        </div>
        <div className={styles.imageContainer}>
          <Image src={headshot} alt=""/>
        </div>
      </div>
      <Accolades />
    </Page>
  );
}
