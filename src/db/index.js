import mongoose from "mongoose";

import {
    DBNAME,
    DBURL,
    DBPORT,
} from "../constants.js";

const connectDB = async () => {

    mongoose.connect(`${DBURL}/${DBNAME}`).then((connectionInstance) => {
        console.log(` MONGODB Connected to database:: ${DBNAME} on port:: ${DBPORT}`);
    }).catch((err) => {
        console.log("Error connecting to database", err);
        process.exit(1);
    });
}

export default connectDB;