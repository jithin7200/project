const baseurl = "http://localhost:3000"


export const getdata = async()=>{
    const res = await fetch(`${baseurl}/blog/allposts`)
    
    
  return res.json()
    
}