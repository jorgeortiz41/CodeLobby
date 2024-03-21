'use client'
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";

const words = ["CONNECT", "COLLABORATE", "INNOVATE", "CREATE", "SHARE"];

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
    className='flex text-5xl antialiased tracking-tight font-bold'
    >
      Where coding enthusiasts&nbsp;
      <motion.span 
      key={words[currentWordIndex]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'
      >
        {words[currentWordIndex]}
      </motion.span>
    </div>
  )
}

