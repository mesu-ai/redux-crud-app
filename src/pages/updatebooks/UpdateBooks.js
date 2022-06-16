import React from 'react';
import './UpdateBooks.scss';

import {useLocation} from 'react-router-dom';

const UpdateBooks = () => {

    const location= useLocation();
   
    return (
        <div id='updateBooks'>
            <h5>Update books</h5>

            <form className='formContainer'>
                <div>
                    <label className='inputLabel'>Title</label>
                    <input className='inputField' placeholder='Enter Title'
                    defaultValue={location?.state?.book?.title || ''}
                    
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>Body</label>
                    <input className='inputField' placeholder='Enter Body' 
                     defaultValue={location?.state?.book?.body || ''}
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>Update</button>

            </form>

        </div>
    );
};

export default UpdateBooks;