const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connectDb = require('./config/db')
connectDb()

const blogRoutes = require('./routes/blogRoute')
const userRoute = require('./routes/userRoute')
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173",
    credential:true
}))
app.use(express.json())
app.use('/blog',blogRoutes)
app.use('/user',userRoute)

const PORT = 3000                                                 

app.listen(PORT, () => {
    console.log("Server Running")


})                                                     
