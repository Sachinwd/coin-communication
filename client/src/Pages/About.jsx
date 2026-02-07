import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-coinDark text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p className="text-coinRed font-mono mb-4">ESTABLISHED 2006</motion.p>
        <motion.h1 className="text-5xl md:text-6xl font-black mb-8">
          WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-coinRed to-white">COIN.</span>
        </motion.h1>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Coin Communication is not just an agency; we are a movement. Starting as a small print media firm in Delhi, 
          we have evolved into a 360-degree powerhouse handling TV, Digital, and Outdoor advertising for over 500+ clients.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16 border-y border-white/10 py-12">
          {[
            { num: "15+", label: "Years Exp." },
            { num: "500+", label: "Clients" },
            { num: "24/7", label: "Support" },
            { num: "100%", label: "Creative" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-coinRed">{stat.num}</h3>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-coinCard p-8 rounded-2xl border border-white/5 text-left">
          <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
          <p className="text-gray-400">
            We believe in the beauty of simplified communications. We do not like complicating things. 
            In fact, most of our hard work goes into minimizing obstacles that come in the way of great work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;