import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Landing from "./pages/landing.js";
import Dashboard from "./pages/dashboard.js";
import "./styles/app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Landing} />
      <Route path="/landing" component={Landing} />
    </Router>
  );
}

export default App;
