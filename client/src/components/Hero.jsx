import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-coinRed/10 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none" />
      
      <div className="text-center z-10 px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-coinRed font-mono mb-4 tracking-[0.3em] uppercase"
        >
          Transforming Communication
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-tight mb-8"
        >
          IDEAS THAT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-coinRed to-orange-500">MOVE PEOPLE.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
        >
          We are a full-service advertising agency in Delhi. From TV to Digital, we simplify the complex to help your brand reach its goals.
        </motion.p>
      </div>
    </section>
  );
};
export default Hero;