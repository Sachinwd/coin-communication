import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // Added FaClock
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://coin-communication.onrender.com', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-coinCard to-coinDark relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <div>
          <h2 className="text-5xl font-bold mb-8">Let's Talk.</h2>
          <p className="text-gray-400 mb-12">
            Ready to transform your brand? Visit our office or drop us a line.
            <br />24x7 Support available.
          </p>
          
          <div className="space-y-8"> {/* Increased spacing slightly for better readability */}
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-coinRed/10 p-3 rounded-lg text-coinRed text-xl"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="font-bold text-lg">Head Office</h4>
                <p className="text-gray-400 text-sm">D-3A, D Block, Ganga Vihar,<br/>Gokalpuri, Delhi 110094</p>
              </div>
            </div>

            {/* NEW: Office Hours Section */}
            <div className="flex items-start space-x-4">
              <div className="bg-coinRed/10 p-3 rounded-lg text-coinRed text-xl"><FaClock /></div>
              <div>
                <h4 className="font-bold text-lg">Office Hours</h4>
                <p className="text-gray-400 text-sm">Monday to Friday: 7:00 - 18:00</p>
                <p className="text-gray-400 text-sm">Saturday: 9:00 - 15:00</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-coinRed/10 p-3 rounded-lg text-coinRed text-xl"><FaPhone /></div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 98711 80377</p>
                <p className="text-gray-400 text-sm">011-65555090</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-coinRed/10 p-3 rounded-lg text-coinRed text-xl"><FaEnvelope /></div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400 text-sm">mail@coincommunication.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-400">Your Name</label>
            <input 
              type="text" 
              className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-coinRed transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-400">Your Email</label>
            <input 
              type="email" 
              className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-coinRed"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
            <textarea 
              rows="4"
              className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-coinRed"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button className="w-full bg-coinRed hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-coinRed/20 hover:shadow-coinRed/40">
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-sm text-green-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;