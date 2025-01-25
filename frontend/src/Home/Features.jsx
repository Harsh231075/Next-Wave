import React from 'react';
import { BookOpen, Target, LineChart as ChartLine, Users2 } from 'lucide-react';

function Features() {
  const featureData = [
    {
      icon: <BookOpen className="h-10 w-10 text-green-600" />,
      title: "Educate Yourself",
      description: "Learn about the environmental impact of single-use cups and discover sustainable alternatives.",
    },
    {
      icon: <Target className="h-10 w-10 text-green-600" />,
      title: "Take Action",
      description: "Join challenges, track your progress, and make a real difference in reducing waste.",
    },
    {
      icon: <ChartLine className="h-10 w-10 text-green-600" />,
      title: "Track Your Impact",
      description: "See your personal contribution to reducing waste and saving trees in real-time.",
    },
    {
      icon: <Users2 className="h-10 w-10 text-green-600" />,
      title: "Collaborate with Others",
      description: "Connect with like-minded individuals and share your sustainable journey.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover how you can contribute to sustainability and create a better future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
