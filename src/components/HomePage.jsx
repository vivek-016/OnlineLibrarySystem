import './Home.css';
import PopularBooks from './PopularBooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home(){

    const books=useSelector((state)=>state.books.list);

    return(
        <div className='Home'>
            <div className="welcome">
                <h1>Welcome to Online Library System</h1>
                <h2>Here you can add and browse your favourite books</h2>
            </div>
            <div className="categoryList">
                <h1>Genres</h1>
                <ul>
                    <Link to="./BrowseBooks"><li>All</li></Link>
                    <Link to="./BrowseBooks/Fantasy"><li>Fantasy</li></Link>
                    <Link to="./BrowseBooks/Mystery"><li>Mystery</li></Link>
                    <Link to="./BrowseBooks/Horror"><li>Horror</li></Link>
                    <Link to="./BrowseBooks/Romance"><li>Romance</li></Link>
                    <Link to="./BrowseBooks/History"><li>History</li></Link>
                    <Link to="./BrowseBooks/Adventure"><li>Adventure</li></Link>
                    
                    
                </ul>
            </div>
            <div className="PopularBooks">
                <PopularBooks booksData = { books }/>
            </div>
        
        </div>
    )
}

export default Home;