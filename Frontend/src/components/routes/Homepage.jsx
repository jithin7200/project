import { Route ,Routes } from "react-router-dom";
import Login from "../auth/Login";
import GetBlog from "../Blogs/GetBlog";


 
 
 const Homepage = () => {
    return (
    <div>
      
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/get" element={<GetBlog/>}/>

        </Routes>
    </div>
  )
 }
 
 export default Homepage



