import { Link } from "react-router-dom";
const BeerCard = (props) => {
    return ( <div className="BeerCard">
        <img src={props.src} alt="BeerImg" />
        <div className="infoCover">
            <p>{props.name}</p>
            <p>{props.tagline}</p>
            <p>Created by: {props.namec}</p>
            <p><Link to={`/All/${props.id}`} >Details</Link></p>
        </div>
    </div> );
}
 
export default BeerCard;