import { configureStore } from '@reduxjs/toolkit'

import getBookSlice from "../features/books/getBookSlice";

const store=configureStore({
    reducer:{
        book:getBookSlice,
    }
});

export default store;