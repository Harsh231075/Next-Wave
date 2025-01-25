import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: 'January 2025',
    title: '10,000 Cups Milestone',
    description: 'Our community reached the incredible milestone of saving 10,000 disposable cups!',
    icon: '🏆',
  },
  {
    date: 'December 2024',
    title: '100 Active Teams',
    description: 'We now have 100 teams actively participating in our initiative.',
    icon: '👥',
  },
  {
    date: 'November 2024',
    title: 'Carbon Neutral Status',
    description: 'Achieved carbon neutral status through our collective efforts.',
    icon: '🌱',
  },
  {
    date: 'October 2024',
    title: 'Community Launch',
    description: 'Successfully launched our cup-saving initiative with 50 founding members.',
    icon: '🚀',
  },
];

const MilestoneCard = ({ milestone, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-center gap-8"
    >
      {/* Timeline line */}
      <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-eco-green/20" />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-eco-green flex items-center justify-center text-2xl">
        {milestone.icon}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
        <div className="text-sm text-eco-green font-semibold mb-2">
          {milestone.date}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {milestone.title}
        </h3>
        <p className="text-gray-600">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
};

const Milestones = () => {
  return (
    <section className="py-20 px-4 bg-eco-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating our achievements and milestones in building a sustainable future.
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={milestone.title}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;