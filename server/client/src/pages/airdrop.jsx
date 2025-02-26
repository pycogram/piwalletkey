import Navbar from '../components/navx';
import Image1 from '../img/pi_logo1.png';
import Image2 from '../img/pi_logo2.png';

const Airdrop = ({manPi, walletPi, piBLogo}) => { 
    return ( 
        <div>
            <Navbar pi1={Image1} pi2={Image2}/>
            <div class="bg4airdrop pt-25 pb-12" >
                <h1 class="text-blue-700 text-2xl sm:text-4xl font-bold pb-10">Pi Free Distribution</h1>
                <div class="grid relative justify-center lg:flex w-auto sm:items-start gap:2 lg:gap-10">
                    <span class="w-fit">
                        <img class="w-70 sm:w-80 md:w-100" src={manPi} alt="img"></img>
                    </span>
                    <span class="w-70 lg:w-100 text-gray-800 text-lg text-start gap-4 grid">
                        <p>
                            The Pi Core Team is celebrating a major milestone 
                            the official Open Mainnet launch and Pi's listing on various exchanges! 
                            To mark this historic moment, the team is distributing free 
                            Pi from its share to dedicated Pioneers. 
                            Every participating Pioneer will receive 314 Pi as a token of 
                            appreciation for their commitment to the ecosystem. 
                        </p>
                        <p>
                            The future of Pi Network has never been brighter! 
                            As the community pushes the boundaries of Web3 innovation, 
                            we are collectively building robust, scalable applications and 
                            real-world utilities that will shape the decentralized future.
                        </p>
                        <p>
                            This is just the beginning! Let’s stay focused, keep building, and 
                            contribute to the growth of the Pi Network. The road ahead is full 
                            of possibilities together, we are redefining the digital economy! 
                        </p>
                    </span>
                </div>
                <div class="block justify-center items-center mt-12">
                    <a href="/verify">
                        <button class="cursor-pointer ml-4 inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset px-20 sm:px-40 py-3 font-semibold bg-blue-900 hover:bg-secondary-400 text-white hover:bg-blue-800 focus-visible:outline-secondary-500">Claim 314 Pi</button>
                    </a>
                </div>
                <div class="flex justify-center py-4 px-8">
                    <span>
                      <img class="w-50 mt-10" src={walletPi} alt="img"></img>  
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Airdrop;