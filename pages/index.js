import Head from "next/head";
import styles from "../styles/Home.module.css";
import Mic from "../components/mic";
import Roberto from "../components/roberto/roberto";
import CasseteCase from "../components/cassete-case/cassete-case";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odisseia Rádio-Espacial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&amp;family=Homemade+Apple&amp;family=Rowdies:wght@700&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Odisseia Rádio-Espacial</h1>
        </div>

        <section className={styles.section}>
          <div className={styles.casseteCaseContainer}>
            <CasseteCase />
          </div>

          {/* 
          <div className={styles.casseteContainer}>
            <div className="cassete-case">S01A E01 - O Mundo da Lua</div>
            <div className="cassete-case">S01A E02 - A Estrofe Perdida</div>
            <div className="cassete-case">S01A E03 - Pink Floyd</div>
            <div className="cassete-case">S01A E04 - O Dragão e o Jorge</div>
            <div className="cassete-case">S01A E05 - Um Lunático Fim</div>
          </div>
          
          <div className={styles.casseteContainer}>
            <Cassete />
          </div> */}

          <div className="mic-container">
            <Mic />
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <div className={styles.walkingContainer}>
          <Roberto />
        </div>

        <div className={styles.moonContainer}>
          <div className="moon"></div>
          <div className="crater crater-1"></div>
          <div className="crater crater-2"></div>
          <div className="crater crater-3"></div>
          <div className="crater crater-4"></div>
          <div className="crater crater-5"></div>
          <div className="crater crater-6"></div>
        </div>
      </footer> */}
    </div>
  );
}
