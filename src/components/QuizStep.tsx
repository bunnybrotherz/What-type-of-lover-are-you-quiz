import { motion, AnimatePresence } from "framer-motion";
import { type QuizQuestion } from "@/data/quizQuestions";
import { categoryEmojis } from "@/data/quizQuestions";

interface QuizStepProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
  selectedAnswer: number | undefined;
  onSelect: (questionId: number, optionIndex: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuizStep = ({
  question,
  currentIndex,
  totalQuestions,
  progress,
  selectedAnswer,
  onSelect,
  onNext,
  onPrev,
}: QuizStepProps) => {
  const emoji = categoryEmojis[question.category] || "💕";
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-background">
      {/* Progress bar */}
      <div className="w-full max-w-xl mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground font-body">
            {emoji} {question.categoryLabel}
          </span>
          <span className="text-sm text-muted-foreground font-body">
            {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-wine"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="w-full max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => onSelect(question.id, index)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 font-body text-sm md:text-base leading-relaxed ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground shadow-md"
                      : "border-border bg-card hover:border-accent hover:bg-card/80 text-card-foreground"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="flex items-start gap-3">
                    <span className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground/30"
                    }`}>
                      {isSelected && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary-foreground"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </span>
                    <span>{option.text}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-8 w-full max-w-xl">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-6 py-3 rounded-full border-2 border-border text-muted-foreground font-body text-sm hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Back
        </button>
        <div className="flex-1" />
        <motion.button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className="px-8 py-3 rounded-full gradient-wine text-wine-foreground font-display text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={selectedAnswer !== undefined ? { scale: 1.03 } : {}}
          whileTap={selectedAnswer !== undefined ? { scale: 0.97 } : {}}
        >
          {isLast ? "See My Result ✦" : "Next →"}
        </motion.button>
      </div>
    </div>
  );
};

export default QuizStep;
