import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addStation } from '../../app/features/station/stationSlice';
import './AddStation.scss';

const AddStation = () => {
    const {t} =useTranslation();
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
        dispatch(addStation(addstations));
        e.target.reset();

        e.preventDefault();

    }

    return (
        <div id='updateBooks' style={{backgroundColor:''}}>
            <h2>{t("Add Station Table")}</h2>

            <form className='formContainer' onSubmit={handleSubmit}>
                
                
                <div>
                    <label className='inputLabel'>{t("Station Name")}</label>
                    <input className='inputField' placeholder='Enter Name'
                    name='name'
                    onBlur={handleOnBlur}
                
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>{t("Station Frequency")}</label>
                    <input className='inputField' placeholder='Enter Frequency' 
                    name='frequency'
                    onBlur={handleOnBlur}
                    
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>{t("Add Station")}</button>

            </form>
            
        </div>
    );
};

export default AddStation;