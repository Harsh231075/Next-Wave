import React, { useState } from 'react';
import { motion } from 'framer-motion';

const leaderboardData = {
  individuals: [
    { name: 'Alex Thompson', cups: 156, streak: 45 },
    { name: 'Maria Garcia', cups: 143, streak: 30 },
    { name: 'John Smith', cups: 128, streak: 28 },
    { name: 'Lisa Chen', cups: 120, streak: 25 },
    { name: 'David Kim', cups: 115, streak: 20 },
  ],
  teams: [
    { name: 'Marketing Team', cups: 789, members: 12 },
    { name: 'Engineering', cups: 654, members: 15 },
    { name: 'Sales Department', cups: 543, members: 10 },
    { name: 'Customer Support', cups: 432, members: 8 },
    { name: 'Design Team', cups: 321, members: 6 },
  ],
};

const LeaderboardTable = ({ data, type }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-eco-green text-white">
          <tr>
            <th className="py-3 px-4 text-left">Rank</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-right">Cups Saved</th>
            <th className="py-3 px-4 text-right">
              {type === 'individuals' ? 'Streak' : 'Members'}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-100 hover:bg-eco-light/50 transition-colors"
            >
              <td className="py-3 px-4 font-semibold">{index + 1}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4 text-right">{item.cups}</td>
              <td className="py-3 px-4 text-right">
                {type === 'individuals' ? `${item.streak} days` : item.members}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('individuals');

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Top Contributors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See who's leading the charge in our mission to reduce single-use cup waste.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-eco-light p-1">
            <button
              className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'individuals'
                  ? 'bg-eco-green text-white'
                  : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setActiveTab('individuals')}
            >
              Individuals
            </button>
            <button
              className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'teams'
                  ? 'bg-eco-green text-white'
                  : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setActiveTab('teams')}
            >
              Teams
            </button>
          </div>
        </div>

        <LeaderboardTable
          data={leaderboardData[activeTab]}
          type={activeTab}
        />

        <div className="text-center mt-8">
          <button className="text-eco-green hover:text-eco-green/80 font-semibold transition-colors">
            View Complete Leaderboard →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;