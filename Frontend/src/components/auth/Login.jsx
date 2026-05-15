
import { useState } from "react";
import { LoginUser } from "../../Api/api";
const Login = () => {
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
            if (res.success) {
                console.log("LOgrdin Successfully");
                setform({
                    email: "",
                    password: "",
                })

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

         <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login