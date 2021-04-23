import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { StarWarsAPI } from './dataSources/starWars'

const dataSources = () => ({
  starWarsAPI: new StarWarsAPI(),
});

const server = new ApolloServer({ schema, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
