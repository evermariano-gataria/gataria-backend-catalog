import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "../routes/catRoutes.js";
import * as envs from "../config/envs.js";

if (!envs.mongoURL) {
  console.error("MONGO_URL environment variable is not configured");
  process.exit(1);
}

if (!envs.mongoDatabase) {
  console.error("MONGO_DATABASE environment variable is not configured");
  process.exit(1);
}

const mongoConnect = envs.mongoURL + envs.mongoDatabase;

class database {
  constructor() {
    this.index = express();

    mongoose.connect(
      mongoConnect,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.index.use(cors());

    this.index.use(express.json());
  }

  routes() {
    this.index.use(routes);
  }
}

export default new database().index;
