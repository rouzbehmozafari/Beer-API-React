import React from 'react';
import './App.css';
import All from './All';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
 
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
          </Routes>
        </Router>
      </div>
    );
  }
}
 
export default App;