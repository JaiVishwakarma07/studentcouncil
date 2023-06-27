import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoute from "./routes/auth.route.js"
import feedbackRoute from "./routes/feedback.route.js"
import userRoute from "./routes/user.route.js"
import announcementRoute from "./routes/announcement.route.js"


const app = express()
dotenv.config()
mongoose.set('strictQuery', true)

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/feedback", feedbackRoute)
app.use("/api/user", userRoute)
app.use("/api/announcements", announcementRoute)



app.listen(8800, () => {
    connect()
    console.log('api working')
})