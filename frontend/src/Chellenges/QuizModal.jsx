import React from 'react';

function QuizModal({
  question,
  currentQuestion,
  totalQuestions,
  score,
  onAnswer,
  showExplanation,
  isCorrect,
  onNext,
  onClose,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1}/{totalQuestions}
          </div>
          <div className="text-sm text-gray-600">Score: {score} points</div>
        </div>

        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

        <div className="space-y-4 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && onAnswer(index)}
              className={`w-full p-4 text-left rounded-lg transition-colors ${showExplanation
                ? index === question.correct
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-100'
                : 'bg-gray-100 hover:bg-gray-200'
                }`}
              disabled={showExplanation}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div
            className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-100' : 'bg-red-100'
              }`}
          >
            <h4
              className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'
                }`}
            >
              {isCorrect ? 'Correct! +5 points' : 'Incorrect'}
            </h4>
            <p className="text-gray-700 mt-2">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button
            onClick={onNext}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}

        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}

          />
        </div>
      </div>
    </div>
  );
}

export default QuizModal;