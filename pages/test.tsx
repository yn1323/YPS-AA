import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { apolloFilter, initializeApollo } from '@constant/apollo/apolloClient'

const ViewerQuery = gql`
  query Query {
    works {
      name
      thumb
    }
  }
`

const Test = (works: any) => {
  console.log(works)
  // CSR
  const res = useQuery(ViewerQuery)
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
export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerQuery,
  })

  return {
    props: {
      ...apolloFilter(apolloClient),
    },
  }
}

export default Test
