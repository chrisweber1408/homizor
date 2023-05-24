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
            setMyNumber(3)
          })
  },[])

  function countPlusNumber(){
    countPlus()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am super!
        </p>
        <button onClick={fetchNumber}>Get count</button>
        <div>{myNumber} test</div>
        <button onClick={countPlusNumber}>Count</button>
      </header>
    </div>
  );
}

export default App;
