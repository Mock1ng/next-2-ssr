import React from 'react';
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router';

const index = ({ data }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>Title: {data.title}</h1>
      <h2>Description: {data.body}</h2>

      <button onClick={() => router.back()}>Go Back</button>
    </div>
  )
}

export const getServerSideProps = async context => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default index
