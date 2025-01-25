import React from "react";

const EnvironmentalImpact = () => {
  return (
    <section id="environmental-impact" className="py-20 bg-gray-50">

      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 text-center mb-12" data-aos="fade-up">
          Environmental Impact of Paper Cups
        </h2>
        <div className="bg-white p-8 rounded-lg mb-5 shadow-lg" data-aos="fade-up">
          <p className="text-lg mb-4">
            Paper cups have a significant environmental footprint:
          </p>
          <ul className="space-y-3 text-lg">
            <li>20 billion paper cups end up in landfills annually</li>
            <li>One paper cup produces 0.11 kg of CO2 emissions</li>
            <li>Requires cutting down millions of trees each year</li>
            <li>Most paper cups contain plastic lining, making them difficult to recycle</li>
            <li>Takes over 20 years to decompose</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Watch the Impact</h3>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/OagTXWfaXEo"
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

export default EnvironmentalImpact;
