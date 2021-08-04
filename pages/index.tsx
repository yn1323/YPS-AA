import Head from 'next/head'
import HeroHeader from '@molecule/HeroHeader'
import IllustCards from '@organism/IllustCards'
import IllustCardsSmall from '@molecule/IllustCardsSmall'

const Home = () => {
  return (
    <div>
      <Head>
        <title>YPS</title>
      </Head>
      <main>
        <HeroHeader />
        <IllustCards />
        <IllustCardsSmall />
      </main>
    </div>
  )
}

export default Home
