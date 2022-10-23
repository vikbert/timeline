import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Hero from './components/hero/Hero';
import Footer from './components/Footer';

export default function Home() {
    return (<div className={styles.container}>
        <Head>
            <title>Timelines</title>
            <meta name="description" content="timelines to display the history"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
            <Hero title1={'Preview.'} title2={'History.'} title3={'Timeline.'}/>
            <p className={styles.description}>
                Getting started
            </p>

            <div className={styles.grid}>
                <Link href="/blockchain">
                    <a className={styles.card}>
                        <h2>Blockchain &rarr;</h2>
                        <p>The history of blockchain</p>
                    </a>
                </Link>
                <Link href="/web3">
                    <a className={styles.card}>
                        <h2>Web 3 &rarr;</h2>
                        <p>The history of the Web</p>
                    </a>
                </Link>
                <Link href="/php">
                    <a className={styles.card}>
                        <h2>PHP &rarr;</h2>
                        <p>27 Years of PHP (1995-2022)</p>
                    </a>
                </Link>
            </div>
        </main>
        <Footer/>
    </div>);
}
