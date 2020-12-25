import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React , {Component , useState} from 'react';

const useStateApp = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h2>counter app </h2>
      <button onClick={increment}>Clicked {count} tim</button>
    </div>
  )


}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
             header
        </p>
      </header>
    </div>
  );
}



export default useStateApp ;
