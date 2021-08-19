import { gql } from 'apollo-server-micro'

const query = gql`
  query Query {
    works {
      name
      thumb
    }
  }
`
export default query
