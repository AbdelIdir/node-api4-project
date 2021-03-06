import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("api/welcome?name=dude")
      .then(res => res.json())
      .then(greeting => setGreeting(greeting))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hosted on heroku </h1>
      <header className="App-header">{greeting}</header>
    </div>
  );
}

export default App;
