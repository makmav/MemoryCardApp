import React from 'react';
import { FaChartLine, FaCogs, FaLeanpub, FaBars } from 'react-icons/fa';
import './menu.css';

function Menu() {
    return (
        <div>
            <nav className="menu">
                <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                <label className="menu-open-button" htmlFor="menu-open">
                    <FaBars />
                </label>
                <a href="#" className="menu-item"> <FaLeanpub/> </a>
                <a href="#" className="menu-item"> <FaChartLine /> </a>
                <a href="#" className="menu-item"> <FaCogs /> </a>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{position: 'absolute'}}>
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Menu;
