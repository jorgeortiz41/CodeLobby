'use client'
import {motion, AnimatePresence} from 'framer-motion'
import { useState, useEffect } from "react";

const words = ["CONNECT", "COLLABORATE", "INNOVATE", "CREATE", "SHARE"];

const AnimateWords = ({ word, isActive }) => {

  return (
    <motion.span 
    initial={{ 
      opacity: 0,
      y: 10 
    }}
    animate={{ 
      opacity: 1,
      y: 0 
    }}
    exit={{ 
      opacity: 0,
      y: -10 
    }}
    transition={{ 
      type: 'spring',
      duration: 1 
    }}
    className={`text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 absolute `}
    >
      {word}
    </motion.span>
  )
}

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change words every 2 seconds

    return () => clearInterval(interval);
  }, []);

  
  return (
    <div
    className='flex flex-col text-5xl antialiased tracking-tight w-screen font-bold'
    >
      Where coding enthusiasts&nbsp;
      <div className='relative w-1/4'>
        <AnimatePresence>
            <AnimateWords key={currentWordIndex} word={words[currentWordIndex]} />
        </AnimatePresence>
      </div>
    </div>
  )
}

