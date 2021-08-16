import Head from 'next/head'
import HomeTemplate from '@template/Home'

const Home = () => {
  return (
    <div>
      <Head>
        <title>YPS</title>
      </Head>
      <main>
        <HomeTemplate />
      </main>
    </div>
  )
}

export default Home
