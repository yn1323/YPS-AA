import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'
import { ApolloServer } from 'apollo-server-micro'
import { ENVIRONMENT } from '@constant/env'
import debug from '@graphql/debug'

export const typeDefs = merge(debug.type)
export const resolvers = merge(debug.resolver)

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

const startServer = apolloServer.start()

export default async function handler(req: any, res: any) {
  if (ENVIRONMENT !== 'development') return
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
