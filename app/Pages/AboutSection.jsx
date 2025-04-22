"use client"
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const stats = [
    { value: "40+", label: "Job Categories", icon: "📊" },
    { value: "100%", label: "Jobs worldwide", icon: "🌍" },
    { value: "10K+", label: "Professionals", icon: "👥" },
    { value: "500+", label: "Partner Companies", icon: "🤝" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Empowering world's Workforce
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Connecting top talent with leading companies across the world through our innovative platform.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              whileHover="hover"
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border-l-4 border-blue-500 hover:border-blue-400 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;