const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Scythe</h1>
            <ul className="links">
                <li><a href="./Home">Home</a></li>
                <li><a href="./About">About-Us</a></li>
                <li><a href="./Contact" style={{color : '#fff', 
                padding : '5px 8px', 
                backgroundColor : '#f1356d',
                borderRadius : '5px'}}>Contact</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;