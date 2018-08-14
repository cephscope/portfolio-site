import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <NavLink className="nav__item" to="/projects" exact={true}>
            <div className="nav__icon">
                <img className="nav__img" src="./images/work-icon.png" />
                <h2 className="nav__description" id="work">Projects</h2>
            </div>
        </NavLink>
        <NavLink className="nav__item" to="/about" exact={true}>
            <div className="nav__icon">
                <img className="nav__img" src="./images/about-icon.png" />
                <h2 className="nav__description" id="about">About</h2>
            </div>
        </NavLink>
        <NavLink className="nav__item" to="/contact" exact={true}>
            <div className="nav__icon">
                <img className="nav__img" src="./images/contact-icon.png" />
                <h2 className="nav__description" id="contact">Contact</h2>
            </div>
        </NavLink>
    </div>
);

export default Nav;

/*
<NavLink className="nav__item" to="/" exact={true}>
            <img className="nav__icon" src="./images/contact-icon.png" />
        </NavLink>
        <NavLink className="nav__item" to="/" exact={true}>
            <img className="nav__icon" src="./images/contact-icon.png" />
        </NavLink>
*/