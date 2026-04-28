const Blog = require(`../models/blogModel`)

// /write
const CreatBlog = async(req,res)=>{
  const {title,description}=req.body
  try{
    const newData = await new Blog ({
        title,
        description,
        author:req.user.name
    })
    await newData.save()
    res.status(200).json({msg:"created successfully", data:newData})
  }
  catch(error){
    console.log(error);
    res.status(500).json({msg:"Server error"})
  }

}

// read
const getPosts = async(req,res)=>{
  try {
    const posts = await Blog.find().sort({createdAt:-1}) 
    res.status(200).json({msg:"All Posts",data:posts})

  } catch (error) {
    res.status(500).json({msg:"server Error"})
  }
}

// Update
const updatPost = async(req,res)=>{
  try {
    const {id}=req.params
    const updatPost=await Blog.findByIdAndUpdate(id,req.body,{new:true})

    if(!updatPost){
      res.status(404).json({msg:"Post Not found "})
        }
        res.status(200).json({msg:'Updted Successfully ',updated:updatPost})
    
  } catch (error) {
    res.status(500).json({msg:"Server Error"})
  }
}

// delete
const deletePost = async(req,res)=>{
  try {
    const {id}=req.params
    const deletePost=await Blog.findByIdAndDelete(id)

    if(!deletePost){
      res.status(404).json({msg:"Post Not found "})
        }
        res.status(200).json({msg:'Deleteed Successfully '})
    
  } catch (error) {
    res.status(500).json({msg:"Server Error"})
  }
}

const searchPost = async (req,res)=>{
 try {
   const {id}= req.params
   const searchPost = await Blog.findById(id)
    
   if(!searchPost){
      res.status(404).json({msg:"Post Not found "})
        }
        res.status(200).json({msg:'Search Successfully ',data:searchPost})
    
  } catch (error) {
    res.status(500).json({msg:"Server Error"})
  }
}


module.exports ={ CreatBlog ,getPosts ,updatPost ,deletePost , searchPost}