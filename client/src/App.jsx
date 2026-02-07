import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact'; // Keep this for the home page scroll section
import Footer from './components/Footer';
import Work from './Pages/Work';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage'; // <--- IMPORT THE NEW PAGE

// Home Page Component (Scrolling Sections)
const Home = () => (
  <>
    <div id="home"><Hero /></div>
    <div id="services"><Services /></div>
    <div id="team"><Team /></div>
  </>
);

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-coinDark min-h-screen text-white font-sans selection:bg-coinRed selection:text-white">
      <Navbar />
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>

      <Footer />
    </div>
  );
};

export default App;