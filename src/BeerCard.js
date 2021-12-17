const BeerCard = (props) => {
    return ( <div className="BeerCard">
        <img src={props.src} alt="BeerImg" />
        <div className="infoCover">
            <p>{props.name}</p>
            <p>{props.tagline}</p>
            <p>Created by: {props.name}</p>
            <p>Details</p>
        </div>
    </div> );
}
 
export default BeerCard;