import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute  from "./api/routes/auth.js"
import hotelsRoute  from "./api/routes/hotels.js"
import roomsRoute  from "./api/routes/rooms.js"
import usersRoute  from "./api/routes/users.js"
const app = express();

dotenv.config();

const connet = async () => {
    try {
        await mongoose.connect(process.env.MOGODB);
        console.log("connected to MongoDB!");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})

// middlewres

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.listen(5000, () => {
    connet()
    console.log("connecting on backend!");
})