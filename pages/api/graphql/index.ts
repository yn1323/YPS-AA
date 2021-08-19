import { makeExecutableSchema } from 'graphql-tools'
import debug from '@graphql/debug'
import { merge } from 'lodash'

export const typeDefs = merge(debug.type)
export const resolvers = merge(debug.resolver)

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
