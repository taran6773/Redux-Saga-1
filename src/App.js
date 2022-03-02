import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multNumber, divNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const myOtherState = useSelector((state) => state.otherNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button
            title="Decrement"
            className="quantity_minus"
            onClick={() => dispatch(decNumber())}
          >
            <span>-1</span>
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <button
            title="Increment"
            className="quantity_plus"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+5</span>
          </button>
        </div>
      </div>
      <div className="App">
      <h4>Using React and Redux</h4>
        <button
          title="Division"
          className="quantity_minus"
          onClick={() => dispatch(divNumber())}
        >
          <span>/5</span>
        </button>
        <input
          name="quantity"
          type="text"
          className="quantity_input"
          value={myOtherState}
        />
        <button
          title="MUltiply"
          className="quantity_plus"
          onClick={() => dispatch(multNumber())}
        >
          <span>*5</span>
        </button>
        </div>
    </>
  );
}

export default App;
