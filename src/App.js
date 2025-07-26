import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [lastOperation, setLastOperation] = useState('');

  const getInputValue = () => {
    const value = Number(inputRef.current.value);
    return isNaN(value) ? 0 : value;
  };

  const updateLastOperation = (operation, value) => {
    setLastOperation(`${operation} ${value}`);
  };

  const handleOperation = (operation, operationSymbol) => (e) => {
    e.preventDefault();
    const inputValue = getInputValue();
    
    if (operation === 'divide' && inputValue === 0) {
      alert('Cannot divide by zero!');
      return;
    }
    
    let newResult;
    switch (operation) {
      case 'plus':
        newResult = result + inputValue;
        break;
      case 'minus':
        newResult = result - inputValue;
        break;
      case 'times':
        newResult = result * inputValue;
        break;
      case 'divide':
        newResult = result / inputValue;
        break;
      default:
        return;
    }
    
    setResult(newResult);
    updateLastOperation(operationSymbol, inputValue);
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    setLastOperation('');
  };

  const resetAll = (e) => {
    e.preventDefault();
    setResult(0);
    setLastOperation('');
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <header>
          <h1>React Calculator</h1>
          <p className="subtitle">Simple & Elegant</p>
        </header>
        
        <div className="calculator">
          <div className="display">
            <div className="result">{result}</div>
            {lastOperation && (
              <div className="last-operation">Last: {lastOperation}</div>
            )}
          </div>
          
          <form className="calculator-form">
            <input
              ref={inputRef}
              type="number"
              placeholder="Enter a number"
              className="number-input"
              step="any"
            />
            
            <div className="button-grid">
              <div className="operation-buttons">
                <button
                  type="button"
                  onClick={handleOperation('plus', '+')}
                  className="operation-btn add"
                  title="Add"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={handleOperation('minus', '-')}
                  className="operation-btn subtract"
                  title="Subtract"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={handleOperation('times', '×')}
                  className="operation-btn multiply"
                  title="Multiply"
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={handleOperation('divide', '÷')}
                  className="operation-btn divide"
                  title="Divide"
                >
                  ÷
                </button>
              </div>
              
              <div className="control-buttons">
                <button
                  type="button"
                  onClick={resetInput}
                  className="control-btn clear-input"
                  title="Clear Input"
                >
                  Clear Input
                </button>
                <button
                  type="button"
                  onClick={resetResult}
                  className="control-btn clear-result"
                  title="Clear Result"
                >
                  Clear Result
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  className="control-btn clear-all"
                  title="Clear All"
                >
                  Clear All
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <footer>
          <p>Built with React ⚛️</p>
        </footer>
      </div>
    </div>
  );
}

export default App;