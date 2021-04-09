import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img  src={logo} alt=""/>
            <nav className="nav">
                <a href="/Shop">ShopOrder </a>
                <a href="/Review">ReviewMangement </a>
                <a href="Inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;