import React from "react";

const Recycling = () => {
  return (
    <section id="recycling" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 text-center mb-8" data-aos="fade-up">
          Recycling & Reduction
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg backdrop-blur-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold">How to Reduce Paper Cup Usage:</h3>
          <ul className="space-y-3 list-disc pl-8 mb-6">
            <li>Use reusable cups or mugs</li>
            <li>Carry your own thermal cup</li>
            <li>Request "for here" cups at cafes</li>
            <li>Encourage your workplace to use reusable cups</li>
          </ul>
          <h3 className="text-xl font-semibold">Recycling Guidelines:</h3>
          <ul className="space-y-3 list-disc pl-8">
            <li>Remove plastic lids and sleeves</li>
            <li>Empty and rinse cups</li>
            <li>Check local recycling guidelines</li>
            <li>Consider composting in facilities that accept them</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Recycling;
