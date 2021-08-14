//It allows to import file with extension .graphql
import "graphql-import-node"
//User schema
import * as userTypeDefs from "./schemas/user.graphql"
import * as emptyTypesDefs from "./schemas/empty.graphql"
import { makeExecutableSchema } from "graphql-tools"
import resolvers from "./resolversMap"
import { GraphQLSchema } from "graphql" 

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypesDefs, userTypeDefs],
    resolvers
})

export default schema