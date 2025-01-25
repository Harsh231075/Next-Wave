import React from 'react'
import { ArrowRight, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <>
      <section className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block mb-6"
          >
            <TreePine className="h-16 w-16 text-green-600" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Make a Difference,<br />One Cup at a Time!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of eco-warriors making sustainable choices. Together, we can reduce paper cup waste
            and create a greener future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold 
                shadow-lg hover:bg-green-700 transition-colors"
            >
              Start a Challenge
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold 
                shadow-lg hover:bg-gray-50 transition-colors border border-green-600"
            >
              <Link to='/awereness' > Learn About Paper Cups</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>


    </>
  )
}

export default Hero