import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timelines</title>
        <meta name="description" content="App to display the history in a Timelines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://amline.vercel.app/">AmLine</a>
        </h1>

        <p className={styles.description}>
          Check the history from the timeline
          <code className={styles.code}>Timeline</code>
        </p>

        <div className={styles.grid}>
          <a href="/blockchain" className={styles.card}>
            <h2>Blockchain &rarr;</h2>
            <p>The history of blockchain</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
