import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStation } from '../../app/features/station/stationSlice';
import './AddStation.scss';

const AddStation = () => {
    const [addstations,setAddStations]=useState();
    const dispatch= useDispatch();

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newStation={...addstations};
        newStation[field]=value;
        setAddStations(newStation);

    }

    const handleSubmit=(e)=>{
         console.log(addstations);
        dispatch(addStation())

        e.preventDefault();

    }

    return (
        <div id='updateBooks' style={{backgroundColor:'red'}}>
            <h2>Add Station</h2>

            <form className='formContainer' onSubmit={handleSubmit}>
                
                
                <div>
                    <label className='inputLabel'>Station Name</label>
                    <input className='inputField' placeholder='Enter Name'
                    name='name'
                    onBlur={handleOnBlur}
                
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>Station Frequency</label>
                    <input className='inputField' placeholder='Enter Frequency' 
                    name='frequency'
                    onBlur={handleOnBlur}
                    
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>Add Station</button>

            </form>
            
        </div>
    );
};

export default AddStation;