import React from "react";

const HealthRisks = () => {
  return (
    <section id="health-risks" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 text-center mb-12" data-aos="fade-up">
          Health Risks of Paper Cups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-34963-8_14/MediaObjects/602283_1_En_14_Fig2_HTML.png" alt="Chemical Leaching" />
            <h3 className="text-xl font-semibold text-green-600">Chemical Leaching</h3>
            <p>Hot beverages can cause chemicals from the plastic lining to leach into drinks, posing health risks.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://www.airtekenv.com/wp-content/uploads/2017/06/Factors-Affecting-Microbial-Growth-e1497562974351.png" alt="Bacterial Growth" />
            <h3 className="text-xl font-semibold text-green-600">Bacterial Growth</h3>
            <p>Paper cups can harbor harmful bacteria in microscopic cracks, increasing the risk of infections.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://www.niehs.nih.gov/sites/default/files/health/assets/images/endocrine_disruptors.jpg" alt="Endocrine Disruption" />
            <h3 className="text-xl font-semibold text-green-600">Endocrine Disruption</h3>
            <p>Certain chemicals in paper cups may interfere with hormone function, leading to potential health issues.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://source.unsplash.com/random/400x300?respiratory" alt="Respiratory Issues" />
            <h3 className="text-xl font-semibold text-green-600">Respiratory Issues</h3>
            <p>The manufacturing process releases harmful chemicals into the air, causing respiratory problems.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://source.unsplash.com/random/400x300?carcinogen" alt="Carcinogenic Concerns" />
            <h3 className="text-xl font-semibold text-green-600">Carcinogenic Concerns</h3>
            <p>Some paper cups may contain trace amounts of carcinogenic compounds that increase cancer risks.</p>
          </div>

          {/* New Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://source.unsplash.com/random/400x300?pollution" alt="Environmental Pollution" />
            <h3 className="text-xl font-semibold text-green-600">Environmental Pollution</h3>
            <p>The production and disposal of paper cups contribute to air, water, and soil pollution, harming ecosystems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthRisks;
