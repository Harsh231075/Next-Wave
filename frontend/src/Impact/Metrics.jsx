import React from 'react';
import { motion } from 'framer-motion';
import { Cup, Cloud, Tree } from 'lucide-react';  // Import icons from lucide-react

const MetricCard = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center"
    >
      <div className="text-eco-green mb-4 w-16 h-16">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">
        <CountUp end={value} duration={2.5} separator="," />
        <span className="text-eco-green">+</span>
      </div>
      <div className="text-gray-600 text-center">{label}</div>
    </motion.div>
  );
};

const Metrics = () => {
  return (
    <section className="py-20 px-4 bg-eco-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Our Collective Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            icon={<Cup />}
            value={10000}
            label="Cups Saved"
            delay={0.2}
          />
          <MetricCard
            icon={<Cloud />}
            value={250}
            label="Kg of Carbon Saved"
            delay={0.4}
          />
          <MetricCard
            icon={<Tree />}
            value={50}
            label="Trees Preserved"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
