import { useState } from 'react'

import './App.css'

const  CounterApp = () => {
  const [count, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  const handleSubmit = (a) => {
    a.preventDefault();
    setCounter(Number(inputValue));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#2c3e50',
          padding: '4px',
          color: 'white'
        }}>

        <div style={{
          backgroundColor: '#2980b9', padding: '20px', borderRadius: '10px', textAlign: 'center'
         
        }}>
          <h2>Counter App</h2>
        </div>

        <form onSubmit={handleSubmit} style={{
          backgroundC olor: '#ecf0f1', color: '#000',
          padding: '20px', margin: '20px auto',
          borderRadius: '10px', width: '300px',
          textAlign: 'center'
        }}>
          <label >Enter a Value</label>
          <br />

          <input type="number" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              margin: '10px', padding: '5px',
              width: '80%'
            }} />
          <br />

          <button type="submit" style={{ padding: '5px 15px', marginTop: '10px' }}>
            submit
          </button>
        </form>

        <div style={{
          backgroundColor: '#ecf0f1', color: '#000', padding: '20px', margin: '20px auto',
          borderRadius: '10px', width: '300px', textAlign: 'center'
        }}>
          <h3>Output</h3>
          <p>value: {count}</p>
          <button onClick={() => setCounter(count + 1)} style={{ margin: '5px' }}>Increment+</button>
          <button onClick={() => setCounter(count - 1)} style={{ margin: '5px' }}>Decerment-</button>
          <button onClick={() => setCounter(0)} style={{ margin: '5px' }}>Reset</button>

        </div>
      </div>



    </>
  )
}

export default CounterApp