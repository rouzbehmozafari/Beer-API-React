import React from 'react';
import './App.css';
import All from './All';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CardDetailsPage from './CardDetailsPage';
import ApiData from './ApiData';
class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <ApiData/>
        <Router>
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/All' element= {<All/>} />
            <Route path='/All/:id' element= {<CardDetailsPage/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
 
export default App;