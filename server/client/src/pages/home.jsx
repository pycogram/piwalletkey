import Navbar from '../components/nav';
import Image1 from '../img/pi_logo1.png';
import Image2 from '../img/pi_logo2.png';


const Homepage = ({
    pilogoBig,
    fireImg, walletImg, bulbImg, kycImg, circleImg, 
    blockchainImg, devImg, profileImg, chatImg
}) => {

    return ( 
        <>
            <Navbar pi1={Image1} pi2={Image2}/>
            <div class="inline-block items-center w-full pt-25 pb-12">
                <div class="flex justify-center items-center mb-4">
                    <img class="w-35 h-35" src={pilogoBig} alt="Pi B-logo"></img>
                </div>
                <div class="text-2xl flex justify-center items-center">
                    <h1>
                        Welcome to the <span class="font-bold">PiNet</span>
                    </h1>
                </div>
                <div class="flex justify-center items-center mt-9">
                    <a href="/report">
                        <button class="inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-4 py-2 font-semibold bg-amber-200 hover:bg-secondary-400 text-gray-700 hover:text-gray-900 focus-visible:outline-secondary-500 cursor-pointer">Report Issue</button>
                    </a>
                </div>
                
                <div class="grid justify-center items-center pt-6 text-gray-800">
                    <a href="/verify">
                        <div class="grid grid-cols-3 gap-y-2 gap-x-8 sm:gap-y-8 sm:gap-x-30 w-fit">
                            <span class="setSpanAA">
                                <img class="setImg" src={fireImg} alt="img"></img>
                                <h2>Fireside</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={walletImg} alt="img"></img>
                                <h2>Wallet</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={bulbImg} alt="img"></img>
                                <h2>Brainstorm</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={kycImg} alt="img"></img>
                                <h2>Kyc</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={circleImg} alt="img"></img>
                                <h2>Mine</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={blockchainImg} alt="img"></img>
                                <h2>Blockchain</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={devImg} alt="img"></img>
                                <h2>DevPortal</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={profileImg} alt="img"></img>
                                <h2>Chat</h2>
                            </span>
                            <span class="setSpanAA">
                                <img class="setImg" src={chatImg} alt="img"></img>
                                <h2>Profiles</h2>
                            </span>
                        </div>
                    </a>
                    <h1 class="underline text-blue-700 py-4 font-bold">
                        Privacy Policy
                    </h1>
                </div>

                <div class="flex justify-center items-center">
                    <a href="/verify">
                        <button class="cursor-pointer inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-15 sm:px-40 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">Explore the Ecosystem</button>
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default Homepage;