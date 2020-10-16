import React from 'react';
import {HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
