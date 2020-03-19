import React, { useState, useCallback } from "react";
import logo from "./images/logo.svg";
import "./styles/App.css";

const Greeting = props => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = useCallback(event => {
    event.preventDefault();
    setName(event?.target?.value);
  });

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      fetch(`/api/v1/goodbye?name=${encodeURIComponent(name)}`)
        .then(response => response.json())
        .then(data => setGreeting(data));
    },
    [name]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" value={name} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{greeting}</p>
      </header>
    </div>
  );
};

export default Greeting;
