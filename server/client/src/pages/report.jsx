import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';
import Image1 from '../img/pi_logo1.png';
import Image2 from '../img/pi_logo2.png';

const Report = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [full_name, setFN] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject]= useState("");
    const [message, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data =  {username, full_name, email, subject, message};
        navigate("/verify", {state: data});
    }

    return ( 
        <div>
            <Navbar pi1={Image1} pi2={Image2}/>
            <form onSubmit={handleSubmit} class="block justify-self-center items-center pt-25 pb-12 text-gray-800">
                <h1 class="underline text-xl pb-4 text-gray-800 px-20 sm:px-0">Please report the issues you are facing.</h1>
                <div class="setInputBox">
                    <label class="setLabel">Username: </label>
                    <div>
                        <input required name="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Johndoe784" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Fullname: </label>
                    <div>
                        <input required name="full_name" value={full_name} onChange={(e) => setFN(e.target.value)} type="text" placeholder="John Doe" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Email: </label>
                    <div>
                        <input required name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Johndoe@gmail.com" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Subject: </label>
                    <div>
                        <input required name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="e.g, Migration, Kyc etc" class="setInput" ></input>
                    </div>
                </div>
                <div class="setInputBox">
                    <label class="setLabel">Message: </label>
                    <div>
                        <textarea required name="message" value={message} onChange={(e) => setMsg(e.target.value)} type="text" placeholder="Briefly state the challenges you are facing." class="setInput h-50"  />
                    </div>
                </div>
                <div class="flex justify-center items-center mt-5">
                    <button type='submit' class="cursor-pointer inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-20 sm:px-40 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">
                        Report
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default Report;