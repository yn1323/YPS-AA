import { gql } from 'apollo-server-micro'

const mutation = gql`
  query Query {
    works {
      name
      thumb
    }
  }
`
export default mutation
