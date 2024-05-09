import { MongoClient } from "mongodb";
/// it better to store the connection string in the .env file
/// but for the sake of simplicity, I will hardcode it here
const connectionString = `mongodb+srv://locle:nfh239cjasdxX@cluster0.u9ee2aw.mongodb.net?retryWrites=true&w=majority&appName=Cluster0`;
const iClient = new MongoClient(connectionString);

declare global {
  var mongodb: {
    client: null | MongoClient;
    promise: any | Promise<MongoClient>;
  };
}

let cached = global.mongodb;

if (!cached) {
  cached = global.mongodb = { client: null, promise: null };
}

async function connectDB() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = iClient.connect();
  }

  try {
    cached.client = await cached.promise;
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error;
  }

  return cached.client;
}

export default connectDB;
