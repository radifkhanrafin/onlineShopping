import React, { useContext } from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center py-3 px-14'>
            <img className='logo' src={logo} alt="" />
            <div className='flex gap-7  text-white text-lg'>
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart Product's</Link>
                
            </div>
        </nav>
    );
};

export default Header;