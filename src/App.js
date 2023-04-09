import React, { useEffect, useState } from "react";

function App(){
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://shy-cyan-fawn-fez.cyclic.app/users')
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setItems(result)
    })
  },[])

  return (
    <div>
      <h1>My User.</h1>
      <ul>
        { items.map((item) => (
          <li key={item.id}>
            {item.fname}<br />
            {item.lname}
            <img src = {item.avatar} alt ={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App