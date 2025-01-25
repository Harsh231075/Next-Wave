import React from 'react';

function QuizCard({ title, description, onStart }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        onClick={onStart}
        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizCard;