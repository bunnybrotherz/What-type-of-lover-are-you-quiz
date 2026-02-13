import { useState, useCallback } from "react";
import { quizQuestions } from "@/data/quizQuestions";
import { archetypes, type Archetype } from "@/data/archetypes";

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<Archetype | null>(null);
  const [started, setStarted] = useState(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex] ?? null;
  const progress = totalQuestions > 0 ? ((currentIndex) / totalQuestions) * 100 : 0;

  const selectAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const next = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // Calculate result
      const scores: Record<string, number> = {};
      for (const [questionId, optionIndex] of Object.entries(answers)) {
        const question = quizQuestions.find((q) => q.id === Number(questionId));
        if (!question) continue;
        const option = question.options[optionIndex];
        if (!option) continue;
        for (const [key, points] of Object.entries(option.scores)) {
          scores[key] = (scores[key] || 0) + points;
        }
      }
      // Also add current question's answer
      if (currentQuestion && answers[currentQuestion.id] !== undefined) {
        // Already included
      }

      let maxKey = "DC";
      let maxScore = 0;
      for (const [key, score] of Object.entries(scores)) {
        if (score > maxScore) {
          maxScore = score;
          maxKey = key;
        }
      }
      setResult(archetypes[maxKey]);
    }
  }, [currentIndex, totalQuestions, answers, currentQuestion]);

  const prev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setStarted(false);
  }, []);

  return {
    started,
    setStarted,
    currentIndex,
    currentQuestion,
    totalQuestions,
    progress,
    answers,
    selectAnswer,
    next,
    prev,
    result,
    restart,
  };
}
