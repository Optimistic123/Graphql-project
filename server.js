// server.js
import  express from 'express';
import  { ApolloServer } from 'apollo-server-express';
import   connectDB  from './db.js';
import  { typeDefs } from './Scehma/event.js';
import { resolvers } from "./Resolver/event.js"

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

// Connect to MongoDB
connectDB();

// Start Apollo Server and then apply middleware to Express
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}
  
startServer().then(() => {
    const PORT = process.env.PORT || 3000;

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
});