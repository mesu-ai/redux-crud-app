import React, { useState } from 'react';
import './UpdateBooks.scss';

import {useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBooks } from '../../app/features/books/bookSlice';

const UpdateBooks = () => {

    const location= useLocation();
    const dispatch =useDispatch();

    const [updateData,setUpdateData]=useState(location?.state?.book);

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newData={...updateData};
        newData[field]=value;
        setUpdateData(newData);

    }

    
    const handleSubmit=(e)=>{
        // console.log(updateData);
       
        dispatch(updateBooks(updateData?.id,updateData));
        
        e.preventDefault();


    }
   
    return (
        <div id='updateBooks'>
            <h2>Update books</h2>

            <form className='formContainer' onSubmit={handleSubmit}>
                <div>
                    <label className='inputLabel'>Title</label>
                    <input className='inputField' placeholder='Enter Title'
                    name='title'
                    onBlur={handleOnBlur}
                    defaultValue={location?.state?.book?.title || ''}
                    
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>Body</label>
                    <input className='inputField' placeholder='Enter Body' 
                    name='body'
                    onBlur={handleOnBlur}
                     defaultValue={location?.state?.book?.body || ''}
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>Update</button>

            </form>

        </div>
    );
};

export default UpdateBooks;