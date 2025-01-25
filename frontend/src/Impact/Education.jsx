import React from 'react';
import { motion } from 'framer-motion';

const educationPoints = [
  {
    title: 'Environmental Impact',
    description: 'Single-use cups contribute to deforestation and release harmful chemicals during production.',
    icon: '🌍',
  },
  {
    title: 'Health Risks',
    description: 'Disposable cups may contain microplastics that can leach into beverages over time.',
    icon: '🏥',
  },
  {
    title: 'Economic Benefits',
    description: 'Using reusable cups can save money while helping protect our environment.',
    icon: '💰',
  },
  {
    title: 'Waste Reduction',
    description: 'One reusable cup can replace hundreds of disposable cups annually.',
    icon: '♻️',
  },
];

const EducationCard = ({ point, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="text-4xl mb-4">{point.icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {point.title}
      </h3>
      <p className="text-gray-600">
        {point.description}
      </p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why It Matters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the impact of disposable cups helps us make better choices
            for our health and environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationPoints.map((point, index) => (
            <EducationCard
              key={point.title}
              point={point}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;