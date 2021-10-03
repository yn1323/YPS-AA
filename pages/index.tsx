import Head from 'next/head'
import HomeTemplate from '@template/Page/Home'

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
