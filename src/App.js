
import React, { useState } from "react";
import './App.css';

function App() {
  const [ans, setAns] = useState("");

  const HandleClick = (e) => {
    setAns(ans.concat(e.target.value))
  }

  const ClearAns = () => {
    setAns("");
  }


  /*

  let x = 10;
  let y = 20;
  let text = "x * y";
  let result = eval(text);
  */

  //The eval() executes an expression and return a value
  const Calculate = () => {
    setAns(eval(ans).toString())
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
