import React, { useEffect, useState } from 'react';
import './UpdateStation.scss';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStations } from '../../app/features/station/stationSlice';


const UpdateStation = ({ updateItem = {} }) => {

     const location= useLocation();
    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState(location?.state?.station);

    // useEffect(() => {
    //     setUpdateData(updateItem);
    // }, [updateItem])

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newData = { ...updateData };
        newData[field] = value;
        setUpdateData(newData);

    }


    const handleSubmit = (e) => {

        if (updateData) {

            //  console.log(updateData._id);

            dispatch(updateStations(updateData));
            
            

        }



        e.preventDefault();


    }


    return (
        <div id='updateBooks' style={{ backgroundColor: 'yellow' }}>
            <h2>Update Station</h2>

            <form className='formContainer' onSubmit={handleSubmit}>
                
                
                <div>
                    <label className='inputLabel'>Station Name</label>
                    <input className='inputField' placeholder='Enter Name'
                    name='name'
                    onBlur={handleOnBlur}
                    defaultValue={location?.state?.station?.name || ''}
                
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>Station Frequency</label>
                    <input className='inputField' placeholder='Enter Frequency' 
                    name='frequency'
                    onBlur={handleOnBlur}
                    defaultValue={location?.state?.station?.frequency || ''}
                    
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>Add Station</button>

            </form>

        </div>
    );
};

export default UpdateStation;