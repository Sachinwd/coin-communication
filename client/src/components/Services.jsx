import { motion } from 'framer-motion';
import { FaTv, FaNewspaper, FaGlobe, FaMobileAlt, FaBuilding, FaBroadcastTower } from 'react-icons/fa';

const services = [
  { icon: <FaTv />, title: "TV Advertising", desc: "Prime slots on news & entertainment channels." },
  { icon: <FaNewspaper />, title: "Print Media", desc: "Magazines & Newspapers targeted campaigns." },
  { icon: <FaGlobe />, title: "Digital/Google", desc: "SEO & Adwords to grow online sales." },
  { icon: <FaBuilding />, title: "Outdoor", desc: "High-visibility hoardings and locations." },
  { icon: <FaMobileAlt />, title: "Mobile Ads", desc: "Direct customer outreach strategies." },
  { icon: <FaBroadcastTower />, title: "Radio", desc: "Engaging audio jingles on top stations." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-coinCard/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center"><span className="border-b-4 border-coinRed">Our Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, borderColor: '#E63946' }}
              className="bg-coinCard p-8 rounded-xl border border-white/5 hover:shadow-2xl hover:shadow-coinRed/20 transition-all cursor-pointer"
            >
              <div className="text-4xl text-coinRed mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;