const baseurl = "http://localhost:3000"


export const getdata = async()=>{
    const res = await fetch(`${baseurl}/blog/allposts`)
    
    
  return res.json()
    
}

// login
const LoginUser = async(postdata)=>{
  const res = await fetch(`${baseurl}/user/loginUser`,{
    mothod:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(postdata)
  })
  return res.json()
}

export default LoginUser