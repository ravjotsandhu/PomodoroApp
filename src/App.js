import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import "./index.css";


function App() {
  const [state, setState] = useState([
    { title: "Break length", count: 5, id: 1 },
    { title: "Session length", count: 30, id: 2 }
  ]);

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
      <div>Clock</div>
    </div>
  );
}
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
