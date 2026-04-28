const express = require('express');
const app = express()

const connectDb = require('./config/db')
connectDb()

const blogRoutes = require('./routes/blogRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use('/blog',blogRoutes)
app.use('/user',userRoute)

const PORT = 3000                                                 

app.listen(PORT, () => {
    console.log("Server Running")


})                                                     
