import Head from "next/head"
import Image from "next/image"
import Page from "@/components/Page"
import Button from "@/components/Button"
import Accolades from "@/components/Accolades"
import styles from "@/styles/Home.module.css"
import ImageCarousel from "@/components/ImageCarousel"
import headshot from '../../public/assets/photos/headshot.jpeg'

const carouselImages = [
  { src: "/assets/photos/forest-paul-pastourmatzis.jpg", alt: "Forest" },
  { src: "/assets/photos/headshot.jpeg", alt: "Professional Headshot" },
  { src: "/assets/photos/ryunosuke-kikuno-ILFfFsqmt2A-unsplash.jpg", alt: "Geometric Mountains" },
  // Add more images...
];

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
      {/* <h2>Projects</h2>
      <div className={styles.carouselContainer}>
        <ImageCarousel images={carouselImages} autoPlay={true} interval={4000} />
      </div> */}
    </Page>
  );
}
