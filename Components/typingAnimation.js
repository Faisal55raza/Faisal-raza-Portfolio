'use client'
import React, { useState, useEffect } from 'react';

function TypingAnimation() {
  const textArray = [" Full-Stack Developer", " Backend Developer", " Competitve Programmar","Knight@Leetcode"];
  const typingSpeed = 50;  // Speed of typing each character
  const erasingSpeed = 30;  // Speed of erasing
  const delayBetweenTexts = 2000;  // Delay between each sentence

  const [text, setText] = useState('');  // Current text being displayed
  const [isTyping, setIsTyping] = useState(true);  // Controls whether typing or erasing is happening
  const [textIndex, setTextIndex] = useState(0);  // Index of the sentence in textArray
  const [charIndex, setCharIndex] = useState(0);  // Index of the current character

  // Typing Effect
  useEffect(() => {
    let typingTimeout;
    
    if (isTyping) {
      if (charIndex < textArray[textIndex].length) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev + textArray[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenTexts);  // Pause before erasing starts
      }
    } else {
      // Erasing Effect
      if (charIndex > 0) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % textArray.length);  // Move to the next sentence
      }
    }

    return () => clearTimeout(typingTimeout);  // Clean up the timeout
  }, [charIndex, isTyping, textIndex]);

  return (
    <div className="inline-block">
      <h1 className=" text-blue-400">
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}

export default TypingAnimation;
