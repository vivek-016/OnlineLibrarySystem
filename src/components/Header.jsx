import { Link } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function Header() {

    return(
        <div className="header">
            
            <div className="Heading">
                <div className="logo">
                    <FontAwesomeIcon icon={faBook} style={{ width: '30px', height: '30px' }}/>
                </div>
                <h1>Online Library System</h1>
            </div>

            <div className="navigation">
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
                <Link to='/BrowseBooks'>
                    <h1>Browse Books</h1>
                </Link>
                <Link to='/AddBook'>
                    <h1>Add Book</h1>
                </Link>
            </div>
            
        </div>
    )
}

export default Header;