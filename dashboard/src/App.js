import React from "react";
import "./App.css";
import Table from "./table/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Providers Dashboard</h1>
      </header>
      <div className="container">
        <Table />
      </div>
    </div>
  )
}

export default App;