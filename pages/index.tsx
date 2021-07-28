import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/colors">
          <a>Colors</a>
        </Link>
        <Image src="/images/storyset/time.gif" width={400} height={400} />
      </main>
    </div>
  )
}

export default Home
