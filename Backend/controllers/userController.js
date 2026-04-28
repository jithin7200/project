const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const saltRound=10

const registerUser = async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,saltRound)
        const userdata = await new User({
            name ,
            email,
            password:hashedPassword

        })
        await userdata.save()
        res.status(200).json({msg:"User Created Successfully",data:userdata})

}
catch(error){
        console.log(error);
       res.status(400).json ({msg:"Server Error"})
}
}

// LOGIN
const login = async(req,res)=>{
    const {email , password}= req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({msg:"Messeage not found"})
        }

        const matchPassword = await bcrypt.compare(password,user.password)
    

        if(!matchPassword){
            return res.status(404).json({msg:"Invalid password"})
        }
        const token = jwt.sign({id:user._id,name:user.name},process.env.SECRET_KEY,{expiresIn:'1h'})
        res.status(250).json({msg:"Login success",token:token})
    } catch (error) {
         res.status(500).json ({msg:"Server Error"})
    }
}
module.exports = {registerUser ,login} 