import './BrowseBooks.css';
import { useSelector } from "react-redux";
import BooksList from './BooksList';
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function BrowseBooks() {


    const books = useSelector((state) => state.books.list);
    const Category = useParams().Category;
    const navigate = useNavigate();
    
    const validCategories = [
        "Fantasy",
        "Mystery",
        "Horror",
        "Romance",
        "History",
        "Adventure"
    ]

    
    
    const categoryBooks = books.filter(data=>Category?data.Genre==Category:data);

    const [searchText, setSearchText]=useState('');

    const [filteredBooks,setFilteredBooks] = useState(categoryBooks);

    useEffect(() => {
        if (Category&&!validCategories.includes(Category)) {
            navigate("/*");
        } else if(Category){
            const categoryBooks = books.filter(book => book.Genre === Category);
            setFilteredBooks(categoryBooks);
        }
        else{
            setFilteredBooks(books);
        }
    }, [Category]);

    function handleSearch(){
        const filterBooks = books.filter(data=>data.title.toUpperCase().includes(searchText.toUpperCase()));
        setFilteredBooks(filterBooks);
        setSearchText('');
    }
    function handleAll(){
        setFilteredBooks(books);
    }
    function handleCategory(){
        setFilteredBooks(categoryBooks);
    }

    return(
        <div className='BBContainer'>
            <div className="SearchContainer">
                
                <input type="text" placeholder='Search Books' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="BcategoryList">
                <h1>Filter by Genre</h1>
                <ul>
                    <Link to="/BrowseBooks" onClick={handleAll}><li>All</li></Link>
                    <Link to="/BrowseBooks/Fantasy" onClick={handleCategory}><li>Fantasy</li></Link>
                    <Link to="/BrowseBooks/Mystery" onClick={handleCategory}><li>Mystery</li></Link>
                    <Link to="/BrowseBooks/Horror" onClick={handleCategory}><li>Horror</li></Link>
                    <Link to="/BrowseBooks/Romance" onClick={handleCategory}><li>Romance</li></Link>
                    <Link to="/BrowseBooks/History" onClick={handleCategory}><li>History</li></Link>
                    <Link to="/BrowseBooks/Adventure" onClick={handleCategory}><li>Adventure</li></Link>
                    
                    
                </ul>
            </div>
            <div className="BooksList">

                <BooksList booksData= {filteredBooks} />
            </div>

        </div>
    )
}
export default BrowseBooks;