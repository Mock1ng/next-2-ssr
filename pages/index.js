import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hallo</h1>

        <Link href='/user'><a>Static Page</a></Link>
        <Link href='/posts'>Dynamic Page</Link>
      </main>
    </div>
  )
}