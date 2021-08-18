import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    works: [Works]
  }
  type Works {
    name: String!
    thumb: String!
  }
`
