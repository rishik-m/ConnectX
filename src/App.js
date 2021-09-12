import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
        <Router>
          <>
            <Header />
            <AppStruct>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppStruct>
          </>
        </Router>
    </div>
  );
}

export default App;

const AppStruct = styled.div`
  display: flex;
  height: 100vh;
`;