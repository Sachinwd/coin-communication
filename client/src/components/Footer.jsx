import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-20 border-t border-white/5 text-gray-400 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Column 1: Brand Info (Spans wider to prevent overlap) */}
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <h2 className="text-3xl font-black text-white tracking-tighter break-words">
            COIN<span className="text-coinRed">COMMUNICATION</span>
          </h2>
          <p className="leading-relaxed pr-4">
            Transforming brands through strategic 360° advertising solutions since 2006. From traditional media to digital frontiers, we make your voice heard.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/5 p-3 rounded-full hover:bg-coinRed hover:text-white transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Container - Spans rest of the space */}
        <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-coinRed transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-coinRed transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-coinRed transition-colors">Our Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-coinRed transition-colors">Contact Us</Link></li>
            </ul>
          </div>

           {/* Column 3: Services */}
           <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
               {/* Links go to home anchors */}
               <li><a href="/#services" className="hover:text-coinRed transition-colors">TV & Radio Ads</a></li>
               <li><a href="/#services" className="hover:text-coinRed transition-colors">Print Media</a></li>
               <li><a href="/#services" className="hover:text-coinRed transition-colors">Digital Marketing</a></li>
               <li><a href="/#services" className="hover:text-coinRed transition-colors">Outdoor Branding</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="break-words">
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-coinRed mt-1 flex-shrink-0" />
                <span className="leading-tight">D-3A, D Block, Ganga Vihar, Delhi 110094</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-coinRed flex-shrink-0" />
                <span>+91 98711 80377</span>
              </li>
               <li className="flex items-center space-x-3">
                <FaEnvelope className="text-coinRed flex-shrink-0" />
                <span>mail@coincommunication.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Now aligned perfectly with margins) */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} Coin Communication. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-coinRed">Privacy Policy</a>
            <a href="#" className="hover:text-coinRed">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;