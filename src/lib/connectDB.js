import { MongoClient, ServerApiVersion } from "mongodb";
// require("dotenv").config();

let db;

export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    // const uri = `mongodb://0.0.0.0:27017/`;
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("form_doctor");
    return db;
    
  } catch (error) {
    console.log(error);
  }
};

