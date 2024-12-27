import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';

const BooksStore = configureStore({

    reducer:{

        books: booksReducer
    }


});


export default BooksStore;