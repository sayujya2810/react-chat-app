const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const chatRoutes = require("./routes/chatRoutes")

dotenv.config()
connectDB()

const app = express()

app.use(express.json());


app.get("/", (req,res) => {
    res.send("API is running ....")
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Running on ${PORT}`))