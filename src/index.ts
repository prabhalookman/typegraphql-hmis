
import 'dotenv/config';
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
//import { createConnection } from "typeorm";
import { connect } from "mongoose";

import { RegisterResolver } from "./modules/user/Register_res"

const MONGO_URL = process.env.MONGO_URL!.toString();

const main = async () => {

  //await createConnection();

  await connect(MONGO_URL, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected To The MongoDB.")
  }).catch(
    (err) => {
      console.log("DB Connection Server Error : ", err)
  });

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });

  const apolloServer = new ApolloServer({
    schema
  });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main().catch((error)=>{
  console.log(error, 'Main Error');
})