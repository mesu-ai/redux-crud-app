import React from 'react';
import '../Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link className='nav-item' to='/home'>Home</Link>
                <Link className='nav-item' to='/addbooks'>Add Books</Link>
                <Link className='nav-item' to='/updatebooks'>Update Books</Link>
                
            </ul>
            
        </div>
    );
};

export default Navbar;