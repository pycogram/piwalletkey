import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        // const data =  {username, full_name, email, subject, message};
        // navigate("/login", {state: data});

        axios.post('https://host-mern-api.vercel.app/signup', {name, email, password})
        .then(res => {
            console.log(res, "user created");
            navigate("/login", {state: email});
        }).catch(error => console.log(error));
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}  class="block justify-self-center items-center pt-25 pb-12 text-gray-800">
                <h1 class="underline text-xl pb-4 text-gray-800 px-20 sm:px-0">Signup form.</h1>
                <div class="setInputBox">
                    <label class="setLabel">Name: </label>
                    <div>
                        <input required name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Email: </label>
                    <div>
                        <input required name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Johndoe@gmail.com" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Password: </label>
                    <div>
                        <input required name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="J*bg$vbike" class="setInput" ></input>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-5">
                    <button type='submit' class="cursor-pointer inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-20 sm:px-40 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">
                        Signup
                    </button>
                </div>
            </form>
        </div>
     );
}

 
export default Signup;
