// import React  from 'react';
import React , {Component , useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import Loading from './Loading'  //way1 way3
// import { Loading } from './Loading'  //way2
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
    this.state = {  
      users: [],
      loading: false,
      count: 0
    };


    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.conter = this.conter.bind(this);


  }

  conter(){

      this.setState({
        count: this.state.count +1
      });

  }

  //get more user
  getUser(){
    //Loading Data
    this.setState({
      loading: true
    });

    axios("https://api.randomuser.me/?nat=US&results=5").then(response => 
      this.setState({
          users: [...this.state.users, ...response.data.results],
          loading: false
      }) 
    );
  }

  //change user
  getUserChange(){
    //Loading Data
    this.setState({
      loading: true
    });

    axios("https://api.randomuser.me/?nat=US&results=5").then(response => 
      this.setState({
          users: response.data.results,
          loading: false,
      }) 
    );
  }

  handleSubmit(e){
    e.preventDeafult();
    this.getUsers();
    console.log("more users loaded");

  }


  componentWillMount(){
    this. getUser();

    //初始先算一次
    this. conter();
  }

  //update web title
  // componentDidMount() {
  //   document.title = `Clicked ${this.state.count} times`
  // }

  // componentDidUpdate() {
  //   document.title = `Clicked ${this.state.count} times`
  // }



  render() {
    return (
      // const {loading, users} = this.state
      <div>
        axios API: 
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        <hr />
        {!this.state.loading ? (
          this.state.users.map(user =>  (
          <div key={user.id.value}>
            <h3 style={{color:'red'}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <hr/>

          </div>
          ))
          ) : (
            <Loading message="Hey Hey Hey" />
          )}
          <div>
             <h2>counter app </h2>
             <button onClick={this.conter}>Clicked {this.state.count} tim</button>
         </div>
      </div>

      
    );
  }

}


// <form onSubmit={this.handSubmit}>
// <input type="submit" value="load users">

// </form>
// <Loading message={this.state} />



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