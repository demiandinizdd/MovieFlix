import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    children?: React.ReactNode;
}

const Navbar = ({ children }:Props) => (
    <nav className="row bg-primary main-nav">
        <Link to="/"  >
            <h4 className="logo-text">MovieFlix</h4>
        </Link>
        {children}
    </nav>
);

export default Navbar;