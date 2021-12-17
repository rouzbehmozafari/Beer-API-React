import React from 'react';
import HomeButt from './HomeButt';
import BeerCard from "./BeerCard";
import { v4 as uuidv4 } from 'uuid';

class All extends React.Component {
    state = {
        dataUrl: 'https://ih-beers-api2.herokuapp.com/beers',
        dataBase : []
    }
  
    componentDidMount () {
      fetch(this.state.dataUrl)
      .then(res => res.json())
      .then(data => this.setState({dataBase: data}) )
      .catch(err => console.error(err));
    }
    render() { 
        return (<div className="All">
            {this.state.dataBase.map(a => <BeerCard 
                key = {uuidv4()}
                src = {a.image_url}
                name = {a.name}
                tagline = {a.tagline}
                namec = {a.name}
            />)}
            <HomeButt/>
        </div>);
    }
}
 
export default All;