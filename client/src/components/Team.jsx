import { motion } from 'framer-motion';

const team = [
  { name: "Hardendra K. Prasad", role: "Proprietor", initial: "H" },
  { name: "Sangeeta Yadav", role: "Creative Head", initial: "S" },
  { name: "Sanjiv K. Ray", role: "Operation Head", initial: "R" },
];

const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">The Squad</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-coinCard w-80 p-6 rounded-2xl text-center border border-white/5"
            >
              <div className="w-24 h-24 bg-coinRed mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                {member.initial}
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-coinRed text-sm tracking-widest mt-2 uppercase">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;