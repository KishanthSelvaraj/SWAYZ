import { useEffect } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CleaningHome from './pages/cleaningServices/CleaningHome';
import SwayzConstruction from './components/swayzContructionProfile/SwayzConstruction';
import LeanoEnergyProfile from './pages/leanoEnergyProfile/leanoEnergyProfile';
import Navbar from './components/shared/NavBar';
import BusinessProfile from './pages/businessProfile/BusinessProfile';
import Footer from './components/cleaningServices/Footer';
import Home from './pages/home/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cleaning-services" element={<CleaningHome />} />
        <Route path="/profile" element={<LeanoEnergyProfile />} />
        <Route path="/leano-profile" element={<SwayzConstruction />} />
        <Route path="/business-profile" element={<BusinessProfile />} />
      </Routes>
      <Footer/>
    </div>
  );
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
