import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Nike Air Campaign", category: "Digital", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" },
  { id: 2, title: "Coca-Cola TVC", category: "TV Ads", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000" },
  { id: 3, title: "Vogue Magazine", category: "Print", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000" },
  { id: 4, title: "Metro Branding", category: "Outdoor", img: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&q=80&w=1000" },
  { id: 5, title: "Spotify Audio", category: "Radio", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000" },
  { id: 6, title: "Tech Startup", category: "Digital", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" },
];

const Work = () => {
  return (
    <div className="pt-24 min-h-screen bg-coinDark text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-12 text-center"
        >
          OUR <span className="text-coinRed">WORK.</span>
        </motion.h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-coinRed font-mono text-sm mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;