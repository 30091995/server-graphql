import express from 'express'
import { ApolloServer } from "apollo-server-express" 
import schema from "./graphql/schemasMap"

const PORT = 4000

const app = express()

const server = new ApolloServer({
    schema
})

server.start().then(() => server.applyMiddleware({app, path: "/graphql"}))

app.listen(PORT, () => {
    console.log("Graphql is now running on " + PORT)
})