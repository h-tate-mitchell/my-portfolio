import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import styles from '@/styles/Page.module.css'
import HeroImage from '@/components/HeroImage'

type PageProps = {
    children: React.ReactNode;
    title: string;
}

const Page = (props: PageProps) => {
    const { children, title } = props;
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="H. Tate Mitchell's Portfolio App" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroImage />
        <div className="page">
            <div className={styles.pageInner}>
                <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Page