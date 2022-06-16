import React from 'react';
import './UpdateBooks.scss';

import {useLocation} from 'react-router-dom';

const UpdateBooks = () => {

    const location= useLocation();

    const handleOnBlur=()=>{

    }

    
    const handleSubmit=()=>{


    }
   
    return (
        <div id='updateBooks'>
            <h5>Update books</h5>

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