import React from 'react';
// import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    children?: React.ReactNode;
}

const Navbar = ({ children }:Props) => (
    <nav className = "main-navbar">
        {/* TODO: create rotes */}
        {/* <Link to = "/">
            <h4 className="logo-text">MovieFlix</h4>
        </Link> */}
        <a href = "/">
            <h4 className="logo-text">MovieFlix</h4>
        </a>
        
        {children}
    </nav>
)

export default Navbar;