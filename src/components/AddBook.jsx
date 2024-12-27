import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import './AddBook.css';
import { useNavigate } from "react-router-dom";


function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const books = useSelector((state) => state.books.list);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        Genre: "",
        description: "",
        rating: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.author || !formData.Genre || !formData.rating) {
            alert("Please fill in all required fields.");
            return;
        }

        const newBook = {
            id: books.length + 1, 
            title: formData.title,
            author: formData.author,
            Genre: formData.Genre,
            description: formData.description,
            rating: Number(formData.rating), 
        };

        dispatch(addBook(newBook)); 
        alert("Book added successfully!");

        navigate("/BrowseBooks");

        setFormData({ title: "", author: "", Genre: "", description: "", rating: "" }); 
    };

    return (
        <div className="AddBookContainer">
            <div className="formContainer">
                <h1>Add a New Book</h1>
                
                <form onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label htmlFor="title">Title: </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="author">Author: </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                value={formData.author}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="genre">Genre: </label>
                            <select
                                name="Genre"
                                id="genre"
                                value={formData.Genre}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    
                                </option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="History">History</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                            </select>
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="description">Description: </label>
                            <textarea
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="rating">Rating: </label>
                            <input
                                type="number"
                                name="rating"
                                id="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                min="0"
                                max="5"
                                step="0.1"
                                required
                            />
                        </div>

                        <div className="formSubmit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                
            </div>
        </div>
    );
}

export default AddBook;
