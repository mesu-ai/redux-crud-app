import { configureStore } from '@reduxjs/toolkit'
// import deleteBookSlice from '../features/books/deleteBookSlice';

import getBookSlice from "../features/books/getBookSlice";

const store=configureStore({
    reducer:{
        book:getBookSlice,
        // delete:deleteBookSlice
    }
});

export default store;