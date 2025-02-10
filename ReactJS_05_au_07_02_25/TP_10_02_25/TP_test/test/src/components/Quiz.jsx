/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, setQuestions, currentQuestionIndex, setCurrentQuestionIndex, setScore, onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (questions.length === 0) {
      fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((response) => {
          if (!response.ok) throw new Error(`Erreur ${response.status}`);
          return response.json();
        })
        .then((data) => {
          if (!data.results || data.results.length === 0) {
            throw new Error("Aucune question reçue.");
          }
          setQuestions(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des questions :", error);
          setError(error.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [questions, setQuestions]);

  if (loading) return <p>Chargement des questions...</p>;
  if (error) return <p className="text-red-500">Erreur : {error}</p>;
  if (!questions || questions.length === 0) return <p>Aucune question trouvée.</p>;

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  return (
    <Question
      question={questions[currentQuestionIndex]}
      onAnswer={handleAnswer}
    />
  );
  
};


export default Quiz;
