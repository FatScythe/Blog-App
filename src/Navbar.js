import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar container">
            <h1>Scythe</h1>
            <ul className="links">
                <li><Link to="./">Home</Link></li>
                <li><Link to="./create" className="create-link">New Blog</Link></li>
                <li><Link to="./about">About</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;