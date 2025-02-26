import Navbar from '../components/nav';
import Image1 from '../img/pi_logo1.png';
import Image2 from '../img/pi_logo2.png';

const Thank = () => {
    return ( 
        <div>
            <Navbar pi1={Image1} pi2={Image2}/>
            <div class="pt-25 pb-12">
                <h2>
                    Response received!
                </h2>
                <h2 class="mt-3 font-bold text-blue-900 underline">
                    <a href="./home.jsx" className="">OK</a>
                </h2>
            </div>
        </div>

    );
}
 
export default Thank;