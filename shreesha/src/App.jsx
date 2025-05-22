import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SolarPage from './pages/SolorPage';
import LandingPage from './pages/LandingPage';
import WhatWeOffer from './pages/WhatWeOffer';
import OnGridSystem from './pages/OnGridSystem';
import OffGridSystem from './pages/OffGridSystem';
import HybridSystem from './pages/HybridSystem';
import SolarEx from './pages/Gallery';

import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import OnSiteDistributedSolar from './pages/OnSiteDistributedSolar';
import PowerProcurementModels from './pages/PowerProcurementModels';
import ThirdPartyPPAs from './pages/ThirdPartyPPAs';
import CaptiveGroupCaptive from './pages/CaptiveGroupCaptive';
import CAPEX from './pages/CAPEX';
import RESCOModel from './pages/RESCOModel';
import CAPEXEMIModel from './pages/CAPEXEMIModel';
import DeferredCAPEXModel from './pages/DeferredCAPEXModel';
import SolarSystemSolutions from './pages/SolarSystemSolutions';
import SolarWaterPumping from './pages/SolarWaterPumping';
import BiPV from './pages/BiPV';
import SolarCarport from './pages/SolarCarpot';
import RooftopSolarPV from './pages/RooftopSolarPV';
import GroundMountedSolarPV from './pages/GroundMountedSolarPV';
import SolarFarm from './pages/SolarFarm';
import SolarEcommerce from './pages/SolarEcommerce';
import SolarLamp from './pages/SolarLamp';
import SolarSamai from './pages/SolarSamai';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/gallery" element={<SolarEx/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/what" element={<WhatWeOffer/>} />

        <Route path="/on-grid" element={<OnGridSystem/>} />
        <Route path="/off-grid" element={<OffGridSystem/>} />
        <Route path="/hybrid-system" element={<HybridSystem/>} />

        <Route path="/offsite" element={<SolarFarm/>} />
        <Route path="/ppa" element={<ThirdPartyPPAs/>} />
        <Route path="/cap" element={<CaptiveGroupCaptive/>} />
        <Route path="/capex" element={<CAPEX/>} />
        <Route path="/resco" element={<RESCOModel/>} />
        <Route path="/capexemi" element={<CAPEXEMIModel/>} />
        <Route path="/deferred" element={<DeferredCAPEXModel/>} />     

        <Route path="/rooftop" element={<RooftopSolarPV/>}/>
        <Route path="/ground" element={<GroundMountedSolarPV/>} />
        <Route path="/carport" element={<SolarCarport/>}/>
        <Route path="/bipv" element={<BiPV/>}/>
        <Route path="/water" element={<SolarWaterPumping/>}/>

        <Route path="/lamp" element={<SolarLamp/>}/>
        <Route path="/samai" element={<SolarSamai/>}/>

        <Route path="/solar-ecommerce" element={<SolarEcommerce/>} />

        <Route path="/r" element={<SolarPage/>} />
        <Route path="/solarsys" element={<SolarSystemSolutions/>} />
        <Route path="/power" element={<PowerProcurementModels/>} />
        <Route path="/onsite" element={<OnSiteDistributedSolar/>} />


        {/* You can add more routes here */}
      </Routes>
      <WhatsAppButton/>
        <Footer/>
    </Router>
  );
}

export default App;
