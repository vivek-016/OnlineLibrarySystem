import Book from "./Book"
import './PopularBooks.css'

function PopularBooks(props){
    return(
        <div className='PBListContainer'>
            <div className="PBHeader">
                <h1>Popular books</h1>
            </div>

            <div className="PBList">
                {
                    props.booksData.map((data,i)=>{
                        if(data.id <= 5){
                            return <Book key={i} bookDetails = {data}/>
                        }
                    })
                }
            </div>
        </div>
    )
}
export default PopularBooks;