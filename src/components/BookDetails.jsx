import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './BookDetails.css';
import { Link } from "react-router-dom";


function BookDetails(props){

    const books = useSelector((state) => state.books.list);
    const params = useParams();

    const Details = books.filter(data=>data.id == params.id);
    console.log(Details);


    return(
        <div className="detailsContainer">
            <Link to="/">
                <div className="hmbtn">
                    <h1>Go to Home</h1>
                </div>
            </Link>
            <div className="detailsBox">
                <div className="Dheader"><h1>Details</h1></div>
                <div className="details">
                    <h1><div className="subH">Title: </div>{`${Details[0].title}`}</h1>
                    <h1><div className="subH">Author: </div>{`${Details[0].author}`}</h1>
                    <div className="Description">
                        <h1><div className="subH">Description: </div> {`${Details[0].description}`}</h1>
                    </div>
                    <h1><div className="subH">Genre: </div>{`${Details[0].Genre}`}</h1>
                    <h1><div className="subH">Rating: </div>{`${Details[0].rating}`}</h1>
                </div>
            </div>
            <Link to="/BrowseBooks">
                <div className="BBbtn">
                    <h1>Go To Browse</h1>
                </div>
            </Link>

        </div>
    )
}

export default BookDetails;