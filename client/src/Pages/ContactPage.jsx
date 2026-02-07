import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-coinDark">
      
      {/* 1. New Header Section specifically for this page */}
      <div className="pt-32 pb-10 px-6 text-center bg-gradient-to-b from-black to-coinDark">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-4"
        >
          CONTACT <span className="text-coinRed">US.</span>
        </motion.h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? We'd love to hear from you. 
          Fill out the form below or visit our HQ.
        </p>
      </div>

      {/* 2. Reuse the Contact Component */}
      <div className="pb-20">
        <Contact />
      </div>

    </div>
  );
};

export default ContactPage;