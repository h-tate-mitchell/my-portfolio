import Head from "next/head";
import Page from "@/components/Page";
import Button from "@/components/Button"
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <Page title="Portfolio Home | H. Tate Mitchell">
      <h1>Home</h1>
      <p>This is my homepage!</p>
      <p>Check out my project page to see some of the work that I have done.</p>
      <Button className="default" url="/projects">Projects</Button>
    </Page>
  );
}
