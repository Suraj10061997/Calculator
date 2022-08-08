
import React, { useState } from "react";
import './App.css';

function App() {
  // const ops = ["+","-","/","*"]
  const [ans, setAns] = useState("");

  const HandleClick = (e) => {
    setAns(ans.concat(e.target.value))
  }

  const ClearAns = () => {
    setAns("");
  }


  const Add = (character) => {
    let value = ans.split(character);
    let num1 = Number(value[0]);
    let num2 = Number(value[1]);
    let result = num1 + num2;
    setAns(result);
  }
  const Multiply = (character) => {
    let value = ans.split(character);
    let num1 = Number(value[0]);
    let num2 = Number(value[1]);
    let result = num1 * num2;
    setAns(result);
  }
  const Division = (character) => {
    let value = ans.split(character);
    let num1 = Number(value[0]);
    let num2 = Number(value[1]);
    let result = num1 / num2;
    setAns(result);
  }
  const Substract = (character) => {
    let value = ans.split(character);
    let num1 = Number(value[0]);
    let num2 = Number(value[1]);
    let result = num1 - num2;
    setAns(result);
  }
  const Calculate = () => {
    let value = ans.split("");
    if (value.includes("+") || value.includes("-") || value.includes("/") || value.includes("*")) {
      for (let i = 0; i < value.length; i++) {
        if (value[i] === "+" || value[i] === "*" || value[i] === "/" || value[i] === "-") {
          let character = value[i];
          if (character === "+") {
            Add(character);
          }
          else if (character === "*") {
            Multiply(character);
          }
          else if (character === "/") {
            Division(character);
          }
          else if(character === "-") {
            Substract(character);
          }
        }
      }
    }
    else{
      setAns("Error");
    }
  }
  return (
    <div className="calculator">
      <h1 className='heading'>Calculator</h1>
      <div className='parent'>
        <input tupe="text" placeholder='0' id="answer" className='button' value={ans} />
        <input type="button" value="9" className='button' onClick={HandleClick} />
        <input type="button" value="8" className='button' onClick={HandleClick} />
        <input type="button" value="7" className='button' onClick={HandleClick} />
        <input type="button" value="6" className='button' onClick={HandleClick} />
        <input type="button" value="5" className='button' onClick={HandleClick} />
        <input type="button" value="4" className='button' onClick={HandleClick} />
        <input type="button" value="3" className='button' onClick={HandleClick} />
        <input type="button" value="2" className='button' onClick={HandleClick} />
        <input type="button" value="1" className='button' onClick={HandleClick} />
        <input type="button" value="0" className='button' onClick={HandleClick} />
        <input type="button" value="." className='button' onClick={HandleClick} />
        <input type="button" value="+" className='button' onClick={HandleClick} />
        <input type="button" value="-" className='button' onClick={HandleClick} />
        <input type="button" value="*" className='button' onClick={HandleClick} />
        <input type="button" value="/" className='button' onClick={HandleClick} />
        <input type="button" value="%" className='button' onClick={HandleClick} />
        <input type="button" value="C" className='button' onClick={ClearAns} />
        <input type="button" value="=" className='button' onClick={Calculate} />
      </div>
    </div>
  );
}

export default App;
