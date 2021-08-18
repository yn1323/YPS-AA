import { clientFirestore } from '@constant/firebase/clientApp'
import { nodeFirestore } from '@constant/firebase/nodeApp'

interface Works {
  name: string
  thumb: string
}

export const resolvers = {
  Query: {
    async works() {
      const workses = await nodeFirestore.collection('works').get()
      return workses.docs.map(works => works.data()) as Works[]
    },
  },
}
