import {GraphQLServer} from "graphql-yoga";
import {resolver} from "./graphql/resolver";


const PORT = 4000

const server = new GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers: resolver
})


server.start(() => console.log("Server started at http://localhost:" + PORT))