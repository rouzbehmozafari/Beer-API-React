import React from 'react';
import HomeButt from './HomeButt';
import BeerCard from "./BeerCard";
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
                src = {a.image_url}
                name = {a.name}
                tagline = {a.tagline}
                name = {a.name}
            />)}
            <HomeButt/>
        </div>);
    }
}
 
export default All;