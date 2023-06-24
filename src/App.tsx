import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bubble from './components/Bubble'

function App() {
  const [input, setInput] = useState("");
  const [bubbles, setBubbles] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setBubbles(prevBubbles => [...prevBubbles, input]);
      setInput("");
    }
  }

  return (
    <div className="App">
      <div className="message-container">
        {Array.from(bubbles).reverse().map((text, index) => (
          <Bubble key={index} text={text} />
        ))}
      </div>
      <div className="bubble-input-wrapper">
        <input 
          size={input.length > 0 ? input.length + 4 : 1}
          className="bubble-input" value={input} onChange={handleChange} onKeyDown={handleKeyDown}
          type="text" spellCheck="false" />
      </div>
    </div>
  );
}

export default App;
