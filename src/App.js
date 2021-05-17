import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Birne?",
      answerOptions: [
        { answerText: "Elma", isCorrect: false },
        { answerText: "Muz", isCorrect: false },
        { answerText: "Armut", isCorrect: true },
        { answerText: "Domates", isCorrect: false },
      ],
    },
    {
      questionText: "Apfel?",
      answerOptions: [
        { answerText: "Armut", isCorrect: false },
        { answerText: "Elma", isCorrect: true },
        { answerText: "Muz", isCorrect: false },
        { answerText: "Domates", isCorrect: false },
      ],
    },
    {
      questionText: "Banane?",
      answerOptions: [
        { answerText: "Muz", isCorrect: true },
        { answerText: "Elma", isCorrect: false },
        { answerText: "Armut", isCorrect: false },
        { answerText: "Domates", isCorrect: false },
      ],
    },
    {
      questionText: "Tomaten?",
      answerOptions: [
        { answerText: "Muz", isCorrect: false },
        { answerText: "Elma", isCorrect: false },
        { answerText: "Armut", isCorrect: false },
        { answerText: "Domates", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
