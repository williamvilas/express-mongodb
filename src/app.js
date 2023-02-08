import express from "express";
import db from "./config/connect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'failed connect'));
db.once("open", () => {
    console.log('mongodb connected!')
});

const app = express();
app.use(express.json());

routes(app);

export default app;