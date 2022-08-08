import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error 404!</h2>
            <h3>Sorry</h3>
            <p>That page cannot be found</p>
            <Link to='/' className="btn">Back to the Homepage</Link>
        </div>
    );
}
 
export default NotFound;