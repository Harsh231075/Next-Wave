import React from 'react';
import { Users, Calendar } from 'lucide-react';

function Challenges() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
            Ongoing Challenges
          </h2>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChallengeCard
              title="EcoCup Challenge"
              description="Use a reusable cup for 30 days straight and track your impact."
              participants={1234}
              daysLeft={15}
            />
            <ChallengeCard
              title="Sustainability Quiz"
              description="Test your knowledge about environmental impact and win eco-friendly prizes."
              participants={567}
              daysLeft={7}
            />
            <ChallengeCard
              title="Sustainability Bingo"
              description="Complete sustainable actions to win bingo and earn special badges."
              participants={890}
              daysLeft={21}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const ChallengeCard = ({ title, description, participants, daysLeft }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-semibold text-green-600 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-green-500" />
          <span>{participants} Participants</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-green-500" />
          <span>{daysLeft} Days Left</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
        Join Challenge
      </button>
    </div>
  );
};

export default Challenges;
