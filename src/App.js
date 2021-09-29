
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Navbar/Header';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import News from './components/News/News';

function App() {
  let mapCount = 0;
  const [newspapers, setNewspapers] = useState([]);
  // declared USESTATE (up)to store data after calling news api
  // to load data we will use USEEFFECT
  useEffect(() =>
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=4988be5367b8479487171f29e7b69038")
      .then(res => res.json())
      .then(data => setNewspapers(data.articles))
    , [])

  return (
    <div className="App">
      <div className="header">
        <Header></Header>
        <Row xs={1} md={3} className="g-4 mt-5">
          {
            newspapers.map(news => <News
              newspaper={news}
              key={++mapCount}
            ></News>)
          }
        </Row>
      </div>

    </div>
  );
}

export default App;
