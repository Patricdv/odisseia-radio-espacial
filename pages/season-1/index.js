import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Mic from "../../components/mic";
import Roberto from "../../components/roberto/roberto";
import Cassete from "../../components/cassete/cassete";

export default function Season1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odisseia Rádio-Espacial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Odisseia Rádio-Espacial</h1>
        </div>

        <section className={styles.section}>
          <div className={styles.casseteContainer}>
            <Cassete />
          </div>

          <div className="mic-container">
            <Mic />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.walkingContainer}>
          <Roberto />
        </div>

        <div className={styles.moonContainer}>
          <div className={styles.moon}></div>
          <div className={styles.crater1}></div>
          <div className={styles.crater2}></div>
          <div className={styles.crater3}></div>
        </div>
      </footer>
    </div>
  );
}
