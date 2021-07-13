import Head from "next/head";
import styles from "../styles/Home.module.css";
import Mic from "../components/Mic";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odisseia Rádio-Espacial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Odisseia Rádio-Espacial</h1>

        <section className={styles.section}>
          <div>Episodes</div>

          <div className={styles.micContainer}>
            <Mic />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.moon}></div>
        <div className={styles.crater1}></div>
        <div className={styles.crater2}></div>
        <div className={styles.crater3}></div>
      </footer>
    </div>
  );
}
