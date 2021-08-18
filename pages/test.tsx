import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '@constant/apollo/apolloClient'

const ViewerQuery = gql`
  query Query {
    works {
      name
      thumb
    }
  }
`

const Test = ({ initialApolloState }: any) => {
  console.log(initialApolloState)
  // CSR
  // const res = useQuery(ViewerQuery)
  // console.log(res)
  return (
    <div>
      {/* Youre signed in as {viewer.name} and youre {viewer.status} goto{' '}
      <Link href="/about">
        <a>static</a>
      </Link>{' '}
      page. */}
    </div>
  )
}

// SSR
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerQuery,
  })
  console.log(apolloClient.cache.extract())
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Test
