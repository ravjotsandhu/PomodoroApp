import "./index.css";
import { useState, createContext, useEffect } from "react";

const SetTimerContext = createContext();

export function ContextProvider({ children }) {
  const [time, setTime] = useState(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setTime((currentTime) => currentTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <SetTimerContext.Provider
      value={{
        time,
        setIsPlaying
      }}
    >
      {children}
    </SetTimerContext.Provider>
  );
}

export default SetTimerContext;
