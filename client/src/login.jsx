import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    // const getEmail = location.state;

    const [email, setEmail] = useState(location.state);
    const [password, setPassword] = useState("");
    const [err_password, setEP] = useState("");

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:3001/login', {email, password})
        .then(res => {

            if(res.data.status === "success"){
                console.log(res.data.status, 4567)
                if(res.data.role === "admin"){
                    navigate('/dashboard');
                } else {
                    navigate("/home");
                }
                //console.log(res, "user logged in");
            } else {
                setEP(<p class='px-2 py-2 text-center bg-amber-100'>{res.data.message}</p>);
            }

        }).catch(error => console.log(error));
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} class="block justify-self-center items-center pt-25 pb-12 text-gray-800">
                <h1 class="underline text-xl pb-4 text-gray-800 px-20 sm:px-0">Login form.</h1>
                {err_password}
                <div class="setInputBox">
                    <label class="setLabel">Email: </label>
                    <div>
                        <input required name="email" value={email ?? ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Johndoe@gmail.com" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Password: </label>
                    <div>
                        <input required name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="J*bg$vbike" class="setInput" ></input>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-5">
                    <button type='submit' class="cursor-pointer inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-20 sm:px-40 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">
                        Login
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;