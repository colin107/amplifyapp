import './component1.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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
        {/* <img src={lists.results[i].image} /> */}
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

    <div className="Component1">
      <div>
        <HasNoResults />
        <ul>
          {(lists.results!=null)?(HasResults()):(HasNoResults())}
        </ul> 
        {/* <button onClick={() => setCount(count+1)}>
          <Button variant="contained" onClick={() => setCount(count+1)}>
            Next
        </button> */}
        <Button variant="contained"     
        style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
        }}
        onClick={() => setCount(count+1)}>Next</Button>
      </div>
    </div>
  );
}

export default Component1;
