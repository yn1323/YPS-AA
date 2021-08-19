import { gql } from 'apollo-server-micro'

const typeDef = gql`
  type Query {
    works: [Works]
  }
  type Works {
    name: String!
    thumb: String!
  }
`

export default typeDef
