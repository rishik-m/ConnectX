import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Router>
          <>
            <Switch>
              <Route path="/" exact>
                <h1> Home Page </h1>
              </Route>
            </Switch>
          </>
        </Router>
    </div>
  );
}

export default App;
