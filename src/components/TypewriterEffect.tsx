import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: string[];
}

const TypewriterEffect = ({ words }: TypewriterEffectProps) => {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[index]);
  const controls = useAnimation();

  useEffect(() => {
    const typeWriter = async () => {
      const word = words[index];

      // Animate typing the word
      for (let i = 0; i <= word.length; i++) {
        setCurrentWord(word.slice(0, i)); // Update the visible part of the word
        await controls.start({ opacity: 1, transition: { duration: 0.1 } });
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause at the end of the word

      // Animate erasing the word
      for (let i = word.length; i >= 0; i--) {
        setCurrentWord(word.slice(0, i)); // Update the visible part of the word
        await controls.start({ opacity: 1, transition: { duration: 0.1 } });
      }

      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
    };

    typeWriter();
  }, [index, controls, words]);

  return (
    <span className="inline-flex items-center">
      <motion.span
        className="inline-block overflow-hidden whitespace-nowrap"
        animate={controls}
      >
        {currentWord}
      </motion.span>
      <span className="text-black animate-blink">|</span> {/* Black blinking cursor */}
    </span>
  );
};

export default TypewriterEffect;