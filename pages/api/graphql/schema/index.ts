import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '@graphql/resolver/query'
import { typeDefs } from '@graphql/types/type'
// import {schema} from '@graphql/schema'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
