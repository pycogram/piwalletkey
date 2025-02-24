import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const [suc, setSuc] = useState("");

    // axios.defaults.withCredentials = true;

    useEffect(() => {

        // axios.get('http://127.0.0.1:3001/home')
        axios.get('http://127.0.0.1:3001/home', { withCredentials: true })
        .then(res => {
            console.log(res.data, 34567);
            if(res.data === "success-tx"){
                setSuc('succeeced: ok')
            } else {
                navigate('/login')
            }
        }).catch(error => {
            console.log(`Error occured2: ${error}`);
        })

    }, [])

    return ( 
        <div>
            <h2>Welcome Home</h2>
            <p>{suc}</p>
        </div>
     );
}
 
export default Home;