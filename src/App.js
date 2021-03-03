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

export default App;
