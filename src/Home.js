import React from 'react';
import all from './images/all.jpg'
import random from './images/random.png'
import { Link } from 'react-router-dom';

 
class Home extends React.Component {
  state = {

  }

  render() { 
    return (
      <div className="Home">
        <Link to='/All' ><div className="all">
          <img src={all} alt="all" />
          <div className="yellarea"><p>All Beers</p></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas neque explicabo nesciunt repellat voluptate.</p>
        </div></Link>
        <div className="all">
          <img src={random} alt="random" />
          <div className="yellarea"><p>Random Beer</p></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas neque explicabo nesciunt repellat voluptate.</p>
        </div>
      </div>
    );
  }
}
 
export default Home;