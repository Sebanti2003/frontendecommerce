import { ImStopwatch } from "react-icons/im";

import React, { useState, useRef, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0); 
  const [isRunning, setIsRunning] = useState<boolean>(false); 
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time; 
      timerRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime); 
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning && timerRef.current !== null) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current); 
    }
    setTime(0); 
    setIsRunning(false); 
  };

  const formatTime = (time: number): string => {
    const milliseconds = Math.floor((time % 1000) / 10); 
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="text-xl p-6 px-10 rounded-md flex flex-col bg-pink-100 gap-7  justify-center items-center">
        <div className="font-bold flex items-center gap-1"><div>Stopwatch</div><ImStopwatch/></div>
        <div>{formatTime(time)}</div>
        <div className="flex items-center gap-2 text-lg ">
          <button disabled={isRunning} onClick={start} className="p-1 px-2  rounded-lg bg-green-400 border-2 border-black ">Start</button>
          <button disabled={!isRunning} onClick={stop} className="p-1 px-2 rounded-lg  bg-red-400 border-2 border-black ">Stop</button>
          <button onClick={reset} className="p-1 px-2 rounded-lg bg-purple-400 border-2 border-black ">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
