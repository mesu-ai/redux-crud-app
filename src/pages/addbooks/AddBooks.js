import React, { useState } from 'react';
import './AddBooks.scss';

const AddBooks = () => {
    const [addbooks,setAddbooks]=useState();

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newBooks={...addbooks};
        newBooks[field]=value;
        setAddbooks(newBooks);

    }

    const handleSubmit=(e)=>{
        console.log(addbooks);
        
        e.preventDefault();

    }

    return (
        <div>
            <h2>Add books</h2>

            <form className='formContainer' onSubmit={handleSubmit}>
                <div>
                    <label className='inputLabel'>ID</label>
                    <input className='inputField' placeholder='Enter Id'
                    name='id'
                    onBlur={handleOnBlur}
                
                    ></input>

                </div>
                <div>
                    <label className='inputLabel'>Title</label>
                    <input className='inputField' placeholder='Enter Title'
                    name='title'
                    onBlur={handleOnBlur}
                
                    ></input>

                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='inputLabel'>Body</label>
                    <input className='inputField' placeholder='Enter Body' 
                    name='body'
                    onBlur={handleOnBlur}
                    
                    ></input>
                </div>

                <button className='submitBtn' type='submit'>Update</button>

            </form>
            
        </div>
    );
};

export default AddBooks;