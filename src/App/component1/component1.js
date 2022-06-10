import './component1.css';
import React, { useState, useEffect } from 'react';

function Component1() {
  const [count, setCount] = useState(1);
  const [lists, setLists] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
    .then(res => res.json())
    .then(json => setLists(json));
    window.scrollTo(0, 0);
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
    <>
    <div className="Component1">123</div>
    <HasResults></HasResults>
    <button onClick={() => setCount(count+1)}>
          Next
        </button>
    </>
  );
}

export default Component1;
