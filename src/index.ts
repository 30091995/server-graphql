require('dotenv').config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schemasMap";
const mongoose = require("mongoose");
const PORT = 4000;

const app = express();


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => console.log("connected to db"))


const server = new ApolloServer({
  schema,
});

server.start().then(() => server.applyMiddleware({ app, path: "/graphql" }));

app.listen(PORT, () => {
  console.log("Graphql is now running on " + PORT);
});
