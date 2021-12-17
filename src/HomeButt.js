import { Link } from 'react-router-dom';
import logo from './images/Logo.svg'
const HomeButt = () => {
    return ( <div className="HomeButt">
        <Link to='/' ><img src={logo} alt="logo" /></Link>
    </div> );
}
 
export default HomeButt;