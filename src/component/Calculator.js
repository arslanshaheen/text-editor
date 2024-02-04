import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [currentNumber, setCurrentNumber] = useState("");

  const handleNumberClick = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperatorClick = (operator) => {
    if (operator === "+") {
      setResult(result + parseInt(currentNumber));
    } else if (operator === "-") {
      setResult(result - parseInt(currentNumber));
    } else if (operator === "*") {
      setResult(result * parseInt(currentNumber));
    } else if (operator === "/") {
      setResult(result / parseInt(currentNumber));
    }
    setCurrentNumber("");
  };

  const handleEqualsClick = () => {
    handleOperatorClick("+");
  };

  const handleClearClick = () => {
    setResult(0);
    setCurrentNumber("");
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="display">{currentNumber || result}</div>
      <div>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
      </div>
    </div>
  );
}

export default Calculator;
