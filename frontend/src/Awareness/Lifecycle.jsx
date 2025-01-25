import React from "react";

const Lifecycle = () => {
  return (
    <section id="lifecycle" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 text-center mb-8" data-aos="fade-up">
          Life Cycle of Paper Cups
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg backdrop-blur-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold">Manufacturing Process:</h3>
          <ol className="space-y-3 list-decimal pl-8">
            <li>Tree harvesting and processing into paper</li>
            <li>Application of polyethylene coating</li>
            <li>Cup forming and shaping</li>
            <li>Quality control and packaging</li>
          </ol>
          <div className="mt-8">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/FX55cKJvg-g"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;
