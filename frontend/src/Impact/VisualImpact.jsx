import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', cups: 850 },
  { month: 'Feb', cups: 1200 },
  { month: 'Mar', cups: 1100 },
  { month: 'Apr', cups: 1500 },
  { month: 'May', cups: 1800 },
  { month: 'Jun', cups: 2100 },
];

const VisualImpact = () => {
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
            Our Growing Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how our community's efforts grow month by month as we work together to reduce single-use cup waste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="cups"
                  fill="#2F855A"
                  radius={[4, 4, 0, 0]}
                  name="Cups Saved"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-eco-light rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Regional Impact
            </h3>
            <p className="text-gray-600">
              Our initiative spans across multiple regions, with the highest participation
              coming from the West Coast, followed by the East Coast and Midwest regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-eco-light rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Demographic Insights
            </h3>
            <p className="text-gray-600">
              Young professionals and students lead our movement, with growing participation
              from corporate partners and local businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualImpact;