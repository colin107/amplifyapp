// import logo from '../logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(1);
  const [lists, setLists] = useState([])

  console.log("count",count)
  console.log("lists",lists)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
    .then(res => res.json())
    .then(json => setLists(json))
  }, [count])






  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <button onClick={() => setCount(count+1)}>
          Next
        </button>

        {/* <ul>
          {

              lists.results.map(
                item => (
                  <p key={item.id}>{item.name}</p>
                )
              )

          }
        </ul> */}
      </header>
      <body className="App-body">
      </body>
    </div>
  );
}

export default App;
