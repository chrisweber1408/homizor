import logo from './logo.svg';
import './App.css';
import { countPlus, getNumber } from './apiService';
import { useCallback, useState } from 'react';

function App() {

  const [myNumber, setMyNumber] = useState(0)

  const fetchNumber = useCallback(()=>{
    getNumber()
          .then(response => response.data)
          .then(data => {
            setMyNumber(data.number)
          })
  },[myNumber])

  function countPlusNumber(){
    countPlus()
    .then(() => fetchNumber())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am super!
        </p>
        <div>{myNumber}</div>
        <button onClick={countPlusNumber}>Count</button>
      </header>
    </div>
  );
}

export default App;
