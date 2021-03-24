import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

const index = ({ data }) => {
  return (
    <div className={styles.container}>

      <Link href='/'>Back to Home</Link>
      <main className={styles.main}>
        <h1>Static page</h1>
        <ul>
          {data.map(user => (
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

export default index
