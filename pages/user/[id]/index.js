import React from 'react';
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router';

const index = ({ user }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>

      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export const getStaticProps = async context => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const user = await res.json()

  return {
    props: {
      user
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()

  const ids = users.map(user => user.id)
  const paths = ids.map(id => (
    { params: { id: id.toString() } }
  ))

  return {
    paths,
    fallback: false
  }
}

export default index
