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



  function HasResults(){
    var rows = [];
    for (var i = 0; i < lists.results.length; i++) {
      rows.push(<div><img src={lists.results[i].image}/><p>{lists.results[i].name}</p></div>);
    }

    return (
      <div>
        {rows}
      </div>
    )
  }
  function HasNoResults(){
    return(
      <p>nothing here</p>
    )
  }



  return (
    <div className="App">
      <header className="App-header">
      {/* <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="App-logo" alt="logo" /> */}


        { 
          <ul>
            {(lists.results!=null)?(HasResults()):(HasNoResults())}
          </ul> 
        }
        <button onClick={() => setCount(count+1)}>
          Next
        </button>

      </header>
      <body className="App-body">
      </body>
    </div>
  );
}

export default App;
