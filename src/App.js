import { FaMinus, FaPlus, FaPlay, FaPause, FaSyncAlt } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import "./index.css";
import setTimerContext from "./context.js";

function App() {
  const {
    time,
    setIsPlaying,
    setTime,
    currentTimer,
    isPlaying,
    setcurrentTimer
  } = useContext(setTimerContext);
  const [state, setState] = useState([
    { title: "Break length", count: 5, id: 1 },
    { title: "Session length", count: 30, id: 2 }
  ]);
  const handleDecrease = (id) =>
    setState((prev) =>
      prev.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
    );
  const handleIncrease = (id) =>
    setState((prev) =>
      prev.map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el))
    );
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleReset = () => {
    setTime(25 * 60);
  };
  useEffect(() => {
    if (isPlaying) {
      if (convertToTime(time) === "0:00") {
        setTimeout(() => {
          setcurrentTimer((Timer) =>
            Timer === "Session" ? "Break" : "Session"
          );
        }, 1000);
      }
    }
  }, [isPlaying, time, setcurrentTimer]);
  return (
    <div>
      <div className="flex actions-wrapper">
        {state.map(({ title, count, id }) => (
          <SetTimer
            title={title}
            count={count}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            id={id}
          />
        ))}
      </div>
      <div className="clock-container">
        <h1>{currentTimer}</h1>
        <span>{convertToTime(time)}</span>
        <div className="flex">
          <button onClick={() => handlePlay()}>
            <FaPlay />
          </button>
          <button onClick={() => handlePause()}>
            <FaPause />
          </button>
          <button onClick={() => handleReset()}>
            <FaSyncAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
const convertToTime = (count) => {
  const minutes = Math.floor(count / 60);
  let seconds = count % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
};
const SetTimer = ({ title, count, id, handleDecrease, handleIncrease }) => (
  <div className="timer-container">
    <h1>{title}</h1>
    <div className="flex "></div>
    <div>
      <button onClick={() => handleDecrease(id)}>
        <FaMinus />
      </button>
      <span>{count}</span>
      <button onClick={() => handleIncrease(id)}>
        <FaPlus />
      </button>
    </div>
  </div>
);

export default App;
