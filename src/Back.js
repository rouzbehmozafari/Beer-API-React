import back from './images/Back.svg'
import React from 'react';
import {useNavigate } from 'react-router-dom';


const Back = () => {
    let navigate = useNavigate()

    return ( <div className="Back">
        <img onClick={()=>{navigate(-1)}} className='backimg'  src={back} alt="back" />
    </div> );
}
 
export default Back;
