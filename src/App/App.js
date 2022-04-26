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

  // {
  //   if (lists.results != null){
  //     <ul>
  //       lists.results.map(
  //         item => (
  //           <p key={item.id}>{item.name}</p>
  //         )
  //       )
  //     </ul> 
  //   }
  // }




  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}


        { 
          <ul>
            {(lists.results!=null)?(lists.results.map(item => (<p key={item.id}>{item.name}</p>))):(<p>nothing here</p>)}
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
