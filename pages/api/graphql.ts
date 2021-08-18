import { ApolloServer } from 'apollo-server-micro'
import { resolvers } from '@graphql/resolver/query'
import { typeDefs } from '@graphql/types/type'
import { ENVIRONMENT } from '@constant/env'

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
