import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import avatar from '../img/avatar.jpg'

const Navigation =(props) =>{
    return(
        <NavStyle>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/home' activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/cv' activeClassName="active-class">CV</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portfolios' activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blogs' activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className='footer'>
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavStyle>
    )
}
const NavStyle= styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%
`

export default Navigation