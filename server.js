import express from "express";
import cors from cors;
import users from "./routes/users"



const app = express();
app.use(cors())
app.use(express.json)


