/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult((result) => result + e.target.value);
    //setResult(result.concat(e.target.value));
    //console.log(e.target.value);
  };
  const clearHandler = () => {
    setResult("");
  };
  const backSpace = () => {
    //setResult(result.slice(0, result.length - 1));
    setResult(result.slice(0, -1));
  };

  const calculateHandler = () => {
    //setResult(eval(result).toString());
    try {
      const calculatedResult = eval(result);
      if (!Number.isFinite(calculatedResult)) {
        console.error("Error: Division by zero");
      }
      setResult(calculatedResult);
    } catch (error) {
      console.error("Error: Invalid expression");
      setResult("Error: Invalid expression");
    }
  };

  return (
    <div className={styles.calculator}>
      <form>
        <input type="text" value={result} />
      </form>

      <div>
        <button className={styles.operator} value="AC" onClick={clearHandler}>
          AC
        </button>
        <button className={styles.operator} value="Del" onClick={backSpace}>
          Del
        </button>
        <button className={styles.operator} value="%" onClick={clickHandler}>
          %
        </button>
        <button className={styles.operator} value="/" onClick={clickHandler}>
          /
        </button>
      </div>
      <div>
        <button value="7" onClick={clickHandler}>
          7
        </button>
        <button value="8" onClick={clickHandler}>
          8
        </button>
        <button value="9" onClick={clickHandler}>
          9
        </button>
        <button className={styles.operator} value="*" onClick={clickHandler}>
          *
        </button>
      </div>
      <div>
        <button value="4" onClick={clickHandler}>
          4
        </button>
        <button value="5" onClick={clickHandler}>
          5
        </button>
        <button value="6" onClick={clickHandler}>
          6
        </button>
        <button className={styles.operator} value="-" onClick={clickHandler}>
          -
        </button>
      </div>
      <div>
        <button value="1" onClick={clickHandler}>
          1
        </button>
        <button value="2" onClick={clickHandler}>
          2
        </button>
        <button value="3" onClick={clickHandler}>
          3
        </button>
        <button className={styles.operator} value="+" onClick={clickHandler}>
          +
        </button>
      </div>
      <div>
        <button value="00" onClick={clickHandler}>
          00
        </button>
        <button value="0" onClick={clickHandler}>
          0
        </button>
        <button value="." onClick={clickHandler}>
          .
        </button>
        <button
          className={styles.equalBtn}
          value="="
          onClick={calculateHandler}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
