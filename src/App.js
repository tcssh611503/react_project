import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React , {Component , useState, useEffect} from 'react';


const NewsApp = () => {

  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState(['react']);
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=react`)



  // fetch news
  const fetchNews = () => {
    fetch(url)
    .then(result => result.json())
    // .then(data => console.log(data))
    .then(data => setNews(data.hits))
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

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" value={searchQuery} onChange={handleChange}  />
        <button>Search</button>
      </form>
      {news.map( (n,i) => (<p key={i}>{n.title}</p>) )}
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



export default NewsApp ;
