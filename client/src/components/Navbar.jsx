import { motion } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Settings for scroll speed
  const SCROLL_SPEED = 200;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-coinDark/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <RouterLink to="/" className="text-2xl font-black tracking-tighter cursor-pointer">
          COIN<span className="text-coinRed">COMMUNICATION</span>
        </RouterLink>
        
        {/* MENU LINKS */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          
          <li className="hover:text-coinRed cursor-pointer transition-colors">
            <RouterLink to="/">Home</RouterLink>
          </li>

          <li className="hover:text-coinRed cursor-pointer transition-colors">
            <RouterLink to="/about">About Us</RouterLink>
          </li>

          <li className="hover:text-coinRed cursor-pointer transition-colors">
            <RouterLink to="/work">Our Work</RouterLink>
          </li>

          {/* Services: Scrolls on Home, Links on other pages */}
          <li className="hover:text-coinRed cursor-pointer transition-colors">
            {isHome ? (
              <ScrollLink 
                to="services" 
                smooth={true} 
                duration={SCROLL_SPEED} 
                offset={-70}
              >
                Services
              </ScrollLink>
            ) : (
              // If on another page, go to Home then Scroll
              <a href="/#services">Services</a>
            )}
          </li>

          {/* Contact: Always goes to new Contact Page */}
          <li className="hover:text-coinRed cursor-pointer transition-colors">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>

        {/* GET STARTED BUTTON (Also goes to Contact Page) */}
        <div className="hidden md:block">
            <RouterLink to="/contact">
               <button className="bg-coinRed hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105">
                Get Started
              </button>
            </RouterLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;