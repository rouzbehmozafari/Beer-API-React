import React from 'react';
import './App.css';
import All from './All';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CardDetailsPage from './CardDetailsPage';
class App extends React.Component {
  state = {

  }

  render() { 
    return (
      <div className="App">
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