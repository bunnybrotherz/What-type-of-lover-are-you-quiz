import HeroSection from "@/components/HeroSection";
import QuizStep from "@/components/QuizStep";
import ResultPage from "@/components/ResultPage";
import { useQuiz } from "@/hooks/useQuiz";

const Index = () => {
  const quiz = useQuiz();

  if (quiz.result) {
    return <ResultPage archetype={quiz.result} onRestart={quiz.restart} />;
  }

  if (!quiz.started) {
    return <HeroSection onStart={() => quiz.setStarted(true)} />;
  }

  if (!quiz.currentQuestion) return null;

  return (
    <QuizStep
      question={quiz.currentQuestion}
      currentIndex={quiz.currentIndex}
      totalQuestions={quiz.totalQuestions}
      progress={quiz.progress}
      selectedAnswer={quiz.answers[quiz.currentQuestion.id]}
      onSelect={quiz.selectAnswer}
      onNext={quiz.next}
      onPrev={quiz.prev}
    />
  );
};

export default Index;
