import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchStations=createAsyncThunk("station/fetchStation",async()=>{
    try {
        const res=await axios.get('https://immense-fjord-26417.herokuapp.com/stations');

        console.log(res)

        return res.data;
        
    } catch (error) {

        console.log(error)

        
    }
    
});

export const addStation=createAsyncThunk("station/addStation",async(data)=>{

    console.log(data);
    try {
        const res=await axios.post('https://immense-fjord-26417.herokuapp.com/stations',data);
    
        // alert('added new');
        
        return res.data;
    } catch (error) {
        
    }

});

export const deleteStations= createAsyncThunk("station/deleteStations",async(id)=>{

   try {
    const res=await axios.delete(`https://immense-fjord-26417.herokuapp.com/stations/${id}`);
    return res.data;
    
    
   } catch (error) {
    
    console.log(error)
   }

})

export const updateStations= createAsyncThunk("station/updateStations",async(id,data)=>{

    console.log(data)

   try {
    const res=await axios.put(`https://immense-fjord-26417.herokuapp.com/stations/${id}`,data);
    console.log(res);
    return res.data;
    
   } catch (error) {
    
   }
})

const stationSlice=createSlice({
    name:"station",
    initialState:{
        stations:[],
        isLoading:false,
        error:null

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStations.pending,(state)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchStations.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.stations=action.payload;
        });
        builder.addCase(fetchStations.rejected,(state,action)=>{
            state.isLoading=false;
            state.stations=[];
            state.error=action.payload;
        });

        builder.addCase(addStation.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(addStation.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.stations=[...state.stations,action.payload];
            state.error=null;

             console.log(action);
            // alert('added');
        })
        builder.addCase(addStation.rejected,(state,action)=>{

            state.isLoading=false;
            state.error=action.payload;
        })

        builder.addCase(deleteStations.pending,(state)=>{
            state.isLoading=true;
        });

        builder.addCase(deleteStations.fulfilled,(state,action)=>{
            state.isLoading=false;
            const id  = action?.meta?.arg;

            if(id){
                state.stations=state.stations.filter((item)=>item._id !== id);
               
            }
        });

        builder.addCase(deleteStations.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        });

        builder.addCase(updateStations.pending,(state)=>{
            state.isLoading=true;

        });

        builder.addCase(updateStations.fulfilled,(state,action)=>{
            state.isLoading=false;

            const id= action?.meta?.arg;
            if(id){
                state.stations=state.stations.map((item)=>item.id===id ? action.payload : item);
                
            }
            
        });

        builder.addCase(updateStations.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })

    }
});


export default stationSlice.reducer;
