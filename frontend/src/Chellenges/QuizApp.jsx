import React, { useState } from 'react';
import QuizCard from './QuizCard';
import QuizModal from './QuizModal';
import { quizData } from './QuizData';

function QuizApp() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (category) => {
    setCurrentQuiz(category);
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setIsCorrect(null);
    setShowResults(false);
  };

  const handleAnswer = (selectedIndex) => {
    const question = quizData[currentQuiz][currentQuestion];
    const correct = selectedIndex === question.correct;

    if (correct) {
      setScore(score + 5);
    }

    setIsCorrect(correct);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizData[currentQuiz].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setIsCorrect(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Paper Cup Challenge Quiz
        </h1>

        {!currentQuiz && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuizCard
              title="Health Quiz"
              description="Test your knowledge about health impacts of paper cups"
              onStart={() => startQuiz('health')}
            />
            <QuizCard
              title="Environment Quiz"
              description="Learn about environmental effects of paper cup production"
              onStart={() => startQuiz('environment')}
            />
            <QuizCard
              title="Recycling Quiz"
              description="Understand the challenges of recycling paper cups"
              onStart={() => startQuiz('recycling')}
            />
          </div>
        )}

        {currentQuiz && !showResults && (
          <QuizModal
            question={quizData[currentQuiz][currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={quizData[currentQuiz].length}
            score={score}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
            isCorrect={isCorrect}
            onNext={handleNext}
            onClose={resetQuiz}
          />
        )}

        {showResults && (
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Quiz Complete!</h2>
            <div className="text-6xl font-bold text-primary mb-4">{score} points</div>
            <p className="text-xl text-gray-600 mb-8">
              You got {score} out of {quizData[currentQuiz].length * 5} possible points
            </p>
            <button
              onClick={resetQuiz}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;