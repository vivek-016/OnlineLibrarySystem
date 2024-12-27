import './Book.css'
import { Link } from 'react-router-dom';


function Book(props) {

    

    return(
        <div className="BookCard">
            <h2>{props.bookDetails.title}</h2>
            <Link to={`/BookDetails/${props.bookDetails.id}`} ><h3>View Details</h3></Link>
        </div>
    )
}

export default Book;