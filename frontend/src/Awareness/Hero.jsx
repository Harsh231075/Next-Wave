import React from 'react'
import { ChevronRight } from 'lucide-react';
function Hero() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80"
            alt="Environmental impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The True Cost of
            <span className="text-red-400 block">Paper Cup Disposal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Every year, billions of paper cups end up in landfills, threatening our environment
            and health. It's time to understand the impact and take action.
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105 inline-flex items-center group">
            Learn More
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero