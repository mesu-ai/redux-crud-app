import { configureStore } from '@reduxjs/toolkit'
import stationSlice from '../features/station/stationSlice';



const store=configureStore({
    reducer:{
        station:stationSlice,
    }
});

export default store;