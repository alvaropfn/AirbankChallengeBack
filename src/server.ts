import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";
import fs from "fs";
import resolvers from "./resolvers";
import path from "path";


const app = express();

app.use(express.json());


const schemaFile = path.join(__dirname,"/modules/transactions/graphql/schema.gql")
const typeDefs = fs.readFileSync(schemaFile, "utf8");

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.options("*", cors());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server is running. Port ${process.env.PORT || 4000}`)
);
