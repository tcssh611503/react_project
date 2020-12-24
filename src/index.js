import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="timer-example"></div>
    <div id="axiosData"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class AxiosData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  users: [] };
  }

  getUser(){
    axios("https://api.randomuser.me/?nat=US&results=5").then(response => 
      this.setState({
          users: response.data.results
      }) 
    );
  }

  componentWillMount(){
    this. getUser();

  }

  render() {
    return (
      <div>
        axios API: 
        {this.state.users.map(user => 
          <div>
            <h3>{user.name.first}</h3>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <hr/>
          </div>
          
          )}
      </div>
      
    );
  }

}

ReactDOM.render(
  <AxiosData />,
  document.getElementById('axiosData')
);




class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer-example')
);