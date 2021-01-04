import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import React , {Component , useState, useEffect} from 'react';
import {CardList} from './components/card-list/card-list'


const NewsApp = () => {

  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState(['react']);
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=react`)
  const [loading, setLoading] = useState(false)


  // fetch news
  const fetchNews = () => {
    //set loading true
    setLoading(true)
    fetch(url)
    .then(result => result.json())
    // .then(data => console.log(data))
    .then(data => (setNews(data.hits)),setLoading(false))
    .catch(error => console.log(error));
  }

  // const fetchNews = () => {
  //   fetch('http://hn.algolia.com/api/v1/search?query=react')
  //   .then(result => result.json())
  //   // .then(data => console.log(data))
  //   .then(data => setNews(data.hits))
  //   .catch(error => console.log(error));
  // }


//載入速度較滑順
useEffect(()=> {
  fetchNews();
  }, [url]
);

  // useEffect(()=> {
  //   fetchNews();
  //   }, [searchQuery]
  // );

  // useEffect(()=> {
  //   fetchNews();
  //   }
  // );

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit= (event) => {
    event.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

 //function programme
  const showLoading = () => (loading ?  (<h2>Loading...</h2> ): ("") );

  const searchForm = () => (
    <form onSubmit={handleSubmit}> 
    <input type="text" value={searchQuery} onChange={handleChange}  />
    <button>Search</button>
  </form>
  );

  const showNews = () => (
     news.map( (n,i) => (<p key={i}>{n.title}</p>) )
  );

  return (
    <div>
      <h2>News</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}

      // {loading ? <h2>Loading...</h2> : "" }
      // <form onSubmit={handleSubmit}> 
      //   <input type="text" value={searchQuery} onChange={handleChange}  />
      //   <button>Search</button>
      // </form>
      // {news.map( (n,i) => (<p key={i}>{n.title}</p>) )}

    </div>
  )

}

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

const useEffectApp = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  useEffect(()=> {
    document.title = `Clicked ${count} times`
  }
  );

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

class App2 extends Component {
  constructor(){
    super();
    this.state = {
      string: 'Hello React',
    };
  }
  render(){
    return (
      //JSX attribute
      <div className="App">
        <header className="App-header">
          <p>
             {this.state.string}
          </p>
        </header>
        <p>{4+5}</p>
        <button onClick={()=> this.setState({string:'change'})}>Change Text</button>
      </div>
    );
  }

}


class monsters extends Component {
  constructor(){
    super();
    this.state = {
      string: 'Hello React',
      monsters: [
        {
          name: "Doctor",
          id: 'asc1'
        },
        {
          name: "Peter",
          id: 'asc2'
        },
        {
          name: "Zobie",
          id: 'asc3'
        }
      ]
    };
  }
  render(){
    return (
      <div className="App">
       {
         this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}  </h1>)
       }
      </div>
    );
  }

}


class monsters2 extends React.Component {
  constructor(){
    super();
    this.state = {
      string: 'Hello React',
      monsters: []
    };
  }

  //Fetching Content Data
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }

  //check data
  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users").then(
  //     response => console.log(response)
  //   )
  // }
  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(users => console.log(users))

  // }



  render(){
  //name='YY' props
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} /> 
      </div>
    );
  }

}



export default monsters2 ;
