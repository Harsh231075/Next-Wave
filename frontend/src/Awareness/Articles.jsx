import React from "react";

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 text-center mb-8" data-aos="fade-up">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Article */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-52 object-cover rounded-lg" src="https://i.guim.co.uk/img/media/e1411fbaaf37002bf79f2673d5123b9e34dd57ca/7_0_1610_966/master/1610.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2f1478a8c5361d1d60381f63acf9ea47" alt="Paper cups impact" />
            <h3 className="text-xl font-semibold mt-4">The Hidden Cost of Your Daily Coffee Cup</h3>
            <p>Exploring the environmental and economic impact of disposable cup culture...</p>
            <a href="#" className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg">
              Read More
            </a>
          </div>

          {/* Second Article */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-52 object-cover rounded-lg" src="https://static.cambridge.org//content/id/urn%3Acambridge.org%3Aid%3Aarticle%3AS2755094X24000038/resource/name/optimisedImage-png-S2755094X24000038_figAb.jpg?pub-status=live" alt="Environmental impact" />
            <h3 className="text-xl font-semibold mt-4">The True Cost of Environmental Neglect</h3>
            <p>This article dives into the long-term environmental consequences of ignoring sustainability in our everyday products...</p>
            <a href="#" className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg">
              Read More
            </a>
          </div>

          {/* Third Article */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-52 object-cover rounded-lg" src="https://thumbs.dreamstime.com/b/impact-marine-plastic-pollution-understanding-sources-effects-solutions-oceans-impact-marine-plastic-337721171.jpg" alt="Plastic waste" />
            <h3 className="text-xl font-semibold mt-4">From Convenience to Catastrophe: The Plastic Revolution</h3>
            <p>This article focuses on how the rise of disposable plastics, including cups, has led to irreversible damage to ecosystems...</p>
            <a href="#" className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
