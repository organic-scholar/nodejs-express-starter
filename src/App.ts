import express from "express";
import bodyParser from "body-parser";
import { errorHandler } from "./common/ErrorHandler";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);


app.get("/", (_, res)=>{
    res.status(200).send("nodejs-express-starter")
});
