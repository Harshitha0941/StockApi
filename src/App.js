/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import React  from 'react';
import Stock from './Stock';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StockComponent from './Stock';

function App() {
  return (
    
    <Router>
    <StockComponent/>
    <Routes> 
    <Route path="/summary" component={<StockComponent/>} />
    <Route path="/chart" component={<StockComponent/>} />
    <Route path="/statistics" component={<StockComponent/>} />
    <Route path="/analysis" component={<StockComponent/>} />
    <Route path="/settings" component={<StockComponent/>} />
   </Routes>
    </Router>
  );
}

export default App;
