import { useParams } from "react-router-dom";
import Back from "./Back";
import {card} from './DataBase'
const CardDetailsPage = () => {
    let {id} = useParams()
    
    let ncard = card.filter(a=> a._id === id)
    return ( <div className="CardDetailsPage">
        <div className="CardDetails">
        <img className="detailImg" src={ncard[0].image_url} alt="img" />
        <div className="infoCover">
            <p>{ncard[0].name}</p>
            <p>{ncard[0].tagline}</p>
            <div className="date">
                <span>First brewed</span>
                <span>{ncard[0].first_brewed}</span>
            </div>
            <div className="level">
                <span>Attenuation level:</span>
                <span>{ncard[0].attenuation_level}</span>
            </div>
            <p>{ncard[0].description}</p>
            <Back/>
        </div>
        </div>
    </div> );
}
 
export default CardDetailsPage;