import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from './components/Footer';
import Hero from './components/hero/Hero';

export default function Home() {
    return (
        <div className={styles.container}>
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
                </div>
            </main>

            <Footer/>
        </div>
    );
}
