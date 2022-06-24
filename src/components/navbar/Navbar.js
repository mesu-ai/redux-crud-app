import React from 'react';
import '../Navbar.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id='navbar'>
            <ul>
                <Link className='nav-item' to='/home'>Home</Link>
                <Link className='nav-item' to='/addbooks'>Add Station</Link>
                {/* <Link className='nav-item' to='/updatebooks'>Update Station</Link> */}

            </ul>
            <div className='languagBtn'>
                    <button className={`${i18n.language=== 'en' ? 'active' : ''}`} type="button" onClick={() => changeLanguage('en')}>
                        EN
                    </button>
                    <button className={`${i18n.language=== 'bn' ? 'active' : ''}`} type="button" onClick={() => changeLanguage('bn')}>
                    বাং
                    </button>
                </div>

        </div>
    );
};

export default Navbar;