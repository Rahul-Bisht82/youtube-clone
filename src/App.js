import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <div className="app-page">
              {/* -----slidbar----- */}
              <Sidebar />
              {/* -----recommended ---- */}
              <Recommended />
            </div>
          </Route>
          <Route path="/search">
            <h1>search</h1>
          </Route>
        </Switch>
      </Router>
      {/* -----header part --- */}
    </div>
  );
}

export default App;
