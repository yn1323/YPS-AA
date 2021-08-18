import { gql } from 'apollo-server-micro'

export const testQuery = gql`
  query Query {
    works {
      name
      thumb
    }
  }
`
