import mongoose from "mongoose";

  const uri = "mongodb://mongo:27017";

  mongoose.set("strictQuery", true);
  mongoose.connect(uri);

  let db = mongoose.connection;

  export default db;