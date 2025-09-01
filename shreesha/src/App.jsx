import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
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
import SolarLC from './pages/SolarLampsCandles';
import SolarSamai from './pages/SolarSamai';
import SolarOutdoor from './pages/SolarOutdoor';
import GEOA from './pages/GEOA';
import CombinedNetMetering from './pages/CombinedNetMetering';
import CSR from './pages/CSR ';
import ScrollToTop from './components/ScrollToTop';

// Product imports
import SolarEcommerce from './pages/SolarEcommerce';
import SolarLamp from './products/SolarLamp';
import BigLamp from './products/BigLamp';
import SolarDevdasSamai from './products/SolarSilverDevdasSamai';
import PanchpakaliSamai from './products/SolarSilverPanchpakaliSamai';
import BrassSamai from './products/BrassSamai';
import AshtavinayakGanpati from './products/AshtavinayakGanpati';
import CarDiya from './products/CarDiya';
import SolarTableTop from './products/SolarTableTop ';
import SolarDevdas from './products/SolarDevdas';

// Add more product imports here as you create them
// import SolarPanel from './products/SolarPanel';
// import SolarBattery from './products/SolarBattery';

// Cart system imports
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import FloatingCartButton from './components/FloatingCartButton';



// Component to conditionally render cart features
const ConditionalCartFeatures = () => {
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);

  // Define which routes should have cart functionality
  const productRoutes = [
    '/solarnightlamp',
    '/biglamp',
    '/silversamai',
    '/panchpakalisamai',
    '/brass',
    '/ganpatidiya',
    '/solar-panel',
    '/solarcardiya',
    '/solar-ecommerce',
    '/tabletop',
    '/silverdevdas'
    // Add more product routes as you create them
  ];

  // Check if current route is a product route
  const isProductRoute = productRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  const handleProceedToCheckout = () => {
    setShowCart(false);
    console.log('Proceeding to checkout...');
    // You can navigate to a checkout page here if needed
    // navigate('/checkout');
  };

  // Only render cart features on product routes
  if (!isProductRoute) {
    return null;
  }

  return (
    <>
      <FloatingCartButton onClick={() => setShowCart(true)} />
      <Cart 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        onProceedToCheckout={handleProceedToCheckout}
      />
    </>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Regular pages without cart functionality */}
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
          <Route path="/csr" element={<CSR/>} /> 

          <Route path="/rooftop" element={<RooftopSolarPV/>}/>
          <Route path="/ground" element={<GroundMountedSolarPV/>} />
          <Route path="/carport" element={<SolarCarport/>}/>
          <Route path="/bipv" element={<BiPV/>}/>
          <Route path="/water" element={<SolarWaterPumping/>}/>
          <Route path="/geoa" element={<GEOA/>}/>
          <Route path="/netmeter" element={<CombinedNetMetering/>}/>

          <Route path="/lamp" element={<SolarLC/>}/>
          <Route path="/samai" element={<SolarSamai/>}/>
          <Route path="/outdoor" element={<SolarOutdoor/>}/>

          <Route path="/solar-ecommerce" element={<SolarEcommerce/>} />

          <Route path="/r" element={<SolarPage/>} />
          <Route path="/solarsys" element={<SolarSystemSolutions/>} />
          <Route path="/power" element={<PowerProcurementModels/>} />
          <Route path="/onsite" element={<OnSiteDistributedSolar/>} />

          {/* Products with cart functionality */}

          <Route path="/solar-ecommerce" element={<SolarEcommerce/>} />

          <Route path="/solarnightlamp" element={<SolarLamp/>} />
          <Route path="/biglamp" element={<BigLamp/>} />
          <Route path="/silversamai" element={<SolarDevdasSamai/>} />
          <Route path="/panchpakalisamai" element={<PanchpakaliSamai/>} />
          <Route path="/brass" element={<BrassSamai/>} />
          <Route path="/ganpatidiya" element={<AshtavinayakGanpati/>} />
          <Route path="/solarcardiya" element={<CarDiya/>} />
          <Route path="/tabletop" element={<SolarTableTop/>} />
          <Route path="/silverdevdas" element={<SolarDevdas/>} />


  
        </Routes>
        
        {/* Conditional cart features - only show on product pages */}
        <ConditionalCartFeatures />
        
        <WhatsAppButton/>
        <Footer/>
      </CartProvider>
    </Router>
  );
}

export default App;