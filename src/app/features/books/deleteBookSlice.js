import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteBooks= createAsyncThunk("books/deleteBooks",async(id)=>{

    const res=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return res.data;

})

// console.log(deleteBooks);

const deleteBookSlice=createSlice({
    name:'book',
    initialState:{
        
    }



})