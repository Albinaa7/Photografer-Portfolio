import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSortChange }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="dropdown">
                    <Link to="/gallery">Gallery</Link>
                    <div className="dropdown-content">
                        <button onClick={() => onSortChange('All')}>All</button>
                        <button onClick={() => onSortChange('Animals')}>Animals</button>
                        <button onClick={() => onSortChange('Birds')}>Birds</button>
                        <button onClick={() => onSortChange('Flowers')}>Flowers</button>
                        <button onClick={() => onSortChange('Nature')}>Nature</button>
                    </div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
