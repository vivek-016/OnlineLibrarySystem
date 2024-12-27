import Book from "./Book";
import './BooksList.css';

function BooksList(props){
    return(

        <>
            <div className="BLHeader">
                <h1>List of Books</h1>
            </div>
            <div className="BLContainer">

                <div className="BL">
                    {
                    props.booksData.map((data,i)=><Book key={i} bookDetails={data} />)
                    }
                </div>


            </div>
        </>
    )
}

export default BooksList;