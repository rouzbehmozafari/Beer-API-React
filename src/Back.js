import { Link } from 'react-router-dom';
import back from './images/Back.svg'
const Back = () => {
    return ( <div className="Back">
        <Link to='/All' ><img className='backimg' src={back} alt="back" /></Link>
    </div> );
}
 
export default Back;