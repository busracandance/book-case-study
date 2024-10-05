import mongoose, { connect } from "mongoose";
import config from "../../utils/databaseConfig";

export class MongoDBConnection {
  //Mongo DB connections
  static async connectDB(): Promise<void> {
    mongoose.set("strictQuery", true);
    await connect(config.mongo.url);
  }
}