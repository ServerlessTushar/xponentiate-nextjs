import { useEffect, useState, useRef, memo, useMemo } from "react";

interface TypewriterEffectProps {
  words: string[];
}

const TypewriterEffect = memo(({ words }: TypewriterEffectProps) => {
  const [currentWord, setCurrentWord] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  const memoizedWords = useMemo(() => words, [words]);

  useEffect(() => {
    const typeWriter = () => {
      const currentIndex = indexRef.current % memoizedWords.length;
      const word = memoizedWords[currentIndex];
      
      // Typing animation
      for (let i = 0; i <= word.length; i++) {
        timeoutRef.current = window.setTimeout(() => {
          setCurrentWord(word.slice(0, i));
        }, i * 100);
      }

      // Delete animation after pause
      timeoutRef.current = window.setTimeout(() => {
        for (let i = word.length; i >= 0; i--) {
          timeoutRef.current = window.setTimeout(() => {
            setCurrentWord(word.slice(0, i));
            if (i === 0) {
              indexRef.current++;
              typeWriter(); // Restart the typing process for the next word
            }
          }, (word.length - i) * 50);
        }
      }, word.length * 100 + 1000);
    };

    typeWriter();

    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [memoizedWords]);

  return (
    <span className="inline-flex items-center">
      {currentWord}
      <span className="text-black animate-blink">|</span>
    </span>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';

export default TypewriterEffect;
