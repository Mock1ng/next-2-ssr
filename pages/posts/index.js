import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const index = ({ data }) => {
  return (
    <div className={styles.container}>

      <Link href='/'>Back to Home</Link>
      <main className={styles.main}>
        <h1>Dynamic page</h1>
        <ul>
          {data.map(post => (
            <li>
              <Link href='/posts/[id]' as={`/posts/${post.id}`} key={post.id}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default index
