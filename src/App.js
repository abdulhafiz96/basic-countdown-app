import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import randomColor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [show, setShow] = useState(true);

  const toggle = () => {
    setIsRunning(prevState => !prevState);
  }

const toggleShow = () => {
    setShow(prevState => !prevState);
}




  useEffect(() => {
    if (isRunning) {
      // Create speed timer
      let timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);

      // Return cleanup function to clear timer
      // when component unmounts
        return () => clearInterval(timer);
    }
  }, [isRunning, show]);

  const reset = () => {
    setCount(0);
    setIsRunning(false);
  }

  return (
      <val className="out"><div className="App" >
          <button onClick={toggleShow} className="button">{show ? "hide" : "show"}</button>
          {show && <h2 className="num" style={{color: randomColor()}}>{count}</h2>}

          <button onClick={toggle} className="button">
              {(isRunning || count === 0) ? (count === 0 ? "Start" : "Running") : "Stopped"}

          </button>
          <button onClick={reset} className="button">Reset</button>
      </div> </val>

  );
}

export default App;
