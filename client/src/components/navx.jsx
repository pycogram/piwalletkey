import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ({pi1, pi2}) => {
    // const pi1 = props.pi1;
    return ( 
        <nav class="z-10 flex justify-between items-center max-w-screen-2xl mx-auto px-4 bg-blue-800 py-3 fixed top-0 w-full box-border shadow-2xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white sm:hidden ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <span class="w-50 hidden sm:inline-block">
                <img class="w-25 h-10" src={pi1} alt="Pi banner"></img>
            </span>
            <ul>
                <Link to={"/airdrop"} class="flex items-center align-middle gap-4" >
                    <li class="decoration-0"><h3 class="text-white font-bold text-xl mb-1">Airdrop</h3></li> 
                    <img class="w-6 h-7" src={pi2} alt="Pi logo"></img>
                </Link>
            </ul>
            <button class="cursor-pointer hidden sm:inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-4 py-2 font-semibold bg-amber-200 hover:bg-secondary-400 text-gray-700 hover:text-gray-900 focus-visible:outline-secondary-500">Download Pi Browser</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white sm:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </nav>
     );
}
 
export default Navbar;
