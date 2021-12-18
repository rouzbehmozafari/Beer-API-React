import React from 'react';
import HomeButt from './HomeButt';
import BeerCard from "./BeerCard";
import { v4 as uuidv4 } from 'uuid';
import  {Api} from './ApiData';

class All extends React.Component {

    render() { 
        return (<div className="All">
            {Api.map(a => <BeerCard 
                id = {a._id}
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