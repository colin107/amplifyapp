// import logo from '../logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

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
      rows.push(
      <div>
        <img src={lists.results[i].image} />
        <p>{lists.results[i].name}</p>
        </div>);
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

      </header>
      <body className="App-body">        
        <ul>
          {(lists.results!=null)?(HasResults()):(HasNoResults())}
        </ul> 

        <Button variant="contained" onClick={() => setCount(count+1)}>
          Next
        </Button>
      </body>
    </div>
  );
}

export default App;
