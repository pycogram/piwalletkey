import './css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Report from './pages/report';
import Verify from './pages/verify';
import Airdrop from './pages/airdrop';
import Thank from './pages/thank';

import pilogoBig from './img/pi_logo_bg.png';
import fireImg from './img/fire.png'; import walletImg from './img/wallet.png';
import bulbImg from './img/bulb.png'; import kycImg from './img/kyc.png';
import circleImg from './img/circle.png'; import blockchainImg from './img/blockchain.png';
import devImg from './img/dev.png'; import profileImg from './img/profile.png';
import chatImg from './img/chat.png';

import manPi from './img/manPi.png';
import walletPi from './img/walletPi.png';


function App() {
  
  return (
    <Router>
      <div>
        {/* <Navbar pi1={Image1} pi2={Image2}/> */}
      </div>
      <div>
          <Routes>
            {/* <Route index element={<Homepage/>} /> */}
            <Route path='*' 
              element={
                <Homepage 
                  pilogoBig={pilogoBig}
                  fireImg={fireImg} walletImg={walletImg} bulbImg={bulbImg}
                  kycImg={kycImg} circleImg={circleImg} blockchainImg={blockchainImg}
                  devImg={devImg} profileImg={profileImg} chatImg={chatImg}
                />
              } />
            <Route path='/report' element={<Report/>} />
            <Route path='/verify' element={<Verify/>} />
            <Route path='/airdrop' element={<Airdrop manPi={manPi} walletPi={walletPi} piBLogo={pilogoBig}/>} />
            <Route path='/thank' element={<Thank/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App
