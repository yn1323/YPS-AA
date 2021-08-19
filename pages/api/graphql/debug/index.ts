import query from './query'
import resolver from './resolver'
import type from './type'
// import mutation from './mutation'

const schema = {
  query,
  resolver: resolver,
  type,
}

export default schema
