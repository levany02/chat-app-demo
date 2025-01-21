import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config();
const PORT = process.env.PORT || 5001;
// const app =express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.listen(5001, () => {
//     connectToMongoDB();
//     console.log(`Server Running on ${PORT}`)
// });

server.listen(
    PORT, () => {
        connectToMongoDB();
        console.log(`Server running on port ${PORT}`)
    }
)