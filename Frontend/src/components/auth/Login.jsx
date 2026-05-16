
import { useState } from "react";
import { LoginUser } from "../../Api/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GetBlog from "../Blogs/GetBlog";
const Login = () => {
    const navigate = useNavigate();
    const [form, setform] = useState({
        email: "",
        password: "",
    });
    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await LoginUser(form);
            if (res.data.success) {
                console.log("LOgrdin Successfully");
               setTimeout(()=>{
                navigate('/get');
                setform({email:"",password:""})
            },1000 )

            }
        } catch (error) {
   console.log(error);
   
        }
    };
    return(
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="email"
                name="email"
                placeholder="email"
                value={form.email}
                onChange={handlechange} />

                <input type="password"
                name="password"
                placeholder="password"
                value={form.password}
                onChange={handlechange} />

         <button type="submit">SUBMIT
             {/* <Link to='/get'>SUBMIT</Link>  */}
             </button>
            </form>
        </div>

       
    )
}

export default Login