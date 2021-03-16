import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({ data }) {

  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hallo</h1>
        <ul>
          {data.map((user, i) => (
            <li key={user.id}>
              <Link href='/user/[id]' as={`/user/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}