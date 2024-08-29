import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import {urlencoded} from "express";

dotenv.config({path: "./.env"});

connectDB()
.then(()=>{
    app.on("error", (err) => {
        console.log("Error connecting to express server", err);
        throw err
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("Error connecting to database", err);
    throw err;
});



