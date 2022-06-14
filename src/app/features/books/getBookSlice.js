import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})

const getBookSlice=createSlice({
    name:"book",
    initialState:{
        books:[],
        isLoading:false,
        error:null

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBooks.pending,(state)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchBooks.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.books=action.payload;
        });
        builder.addCase(fetchBooks.rejected,(state,action)=>{
            state.isLoading=false;
            state.books=[];
            state.error=action.payload;
        })
    }
});


export default getBookSlice.reducer;
