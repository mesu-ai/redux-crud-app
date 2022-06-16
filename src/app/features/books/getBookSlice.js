import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})

export const deleteBooks= createAsyncThunk("books/deleteBooks",async(id)=>{

    const res=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    console.log(id);

    console.log(res);

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
        });
        builder.addCase(deleteBooks.pending,(state)=>{
            state.isLoading=false;
        });
        builder.addCase(deleteBooks.fulfilled,(state,action)=>{
            state.isLoading=false;
            const id  = action?.meta?.arg;

            if(id){
                state.books=state.books.filter((item)=>item.id !== id);
                alert('done');

            }
        });
        builder.addCase(deleteBooks.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })

    }
});


export default getBookSlice.reducer;
