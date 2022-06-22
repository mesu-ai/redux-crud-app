import React from 'react';
import '../Navbar.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id='navbar'>
            <ul>
                <Link className='nav-item' to='/home'>Home</Link>
                <Link className='nav-item' to='/addbooks'>Add Books</Link>
                <Link className='nav-item' to='/updatebooks'>Update Books</Link>

            </ul>
            <div className='languagBtn'>
                    <button type="button" onClick={() => changeLanguage('en')}>
                        EN
                    </button>
                    <button type="button" onClick={() => changeLanguage('bn')}>
                        BN
                    </button>
                </div>

        </div>
    );
};

export default Navbar;