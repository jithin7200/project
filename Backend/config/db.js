const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.mongo_URL)
        console.log("mongodb connected");
        
    } catch (error) {
        console.log("error in connection");
        
    }
}
module.exports=connectDb