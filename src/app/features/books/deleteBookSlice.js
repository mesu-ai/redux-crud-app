// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// export const deleteBooks= createAsyncThunk("books/deleteBooks",async(id)=>{

//     const res=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

//     console.log(id);

//     console.log(res);

//     return res.data;

// })



// // console.log(deleteBooks);
// // const books =useSelector(state => state.book);

// const deleteBookSlice=createSlice({
//     name:'book',
//     initialState:{
//         isLoading:false,
//         error:null,
//         books:[]
        
//     },

//     extraReducers:(builder)=>{
//         builder.addCase(deleteBooks.pending,(state)=>{
//             state.isLoading=true;
//             state.error=null;
           

//         })
//         builder.addCase(deleteBooks.fulfilled,(state,action)=>{
//             state.isLoading=false;
//             state.error=null;

//             console.log(state);
//             // let index=state.findIndex(({id})=>id===action.payload.id);
//             // state.splice(index,1);
            

//         })
//         builder.addCase(deleteBooks.rejected,(state,action)=>{
//             state.isLoading=false;
//             // state.status=action.payload !== 200;
//             state.error=action.payload;;

//         })
//     }

// })

// export default deleteBookSlice.reducer;