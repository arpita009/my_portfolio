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
                    <NavLink to='/home'  activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about'  activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/cv'  activeClassName="active-class">CV</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portfolios'  activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blogs'  activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact'  activeClassName="active-class">Contact</NavLink>
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
    width: 100%;
    border: 1px solid var(--border-color);
    .avatar{
        width: 90%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 80%;
            border-radius: 60%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        li{
            display: block;
        }
        a{
            display: block;
            padding: .2rem 0;
            position: relative;
            z-index: 10;
            &:hover{
                cursor: pointer;
            }
            &::before{
                content: "";
                position: absolute;
                bottom:0;
                left:0;
                width:0;
                height:50%;
                background-color: var(--primary-color);
                transition: All 0.4s cubic-bezier(1,-0.2,.25,.95);
                z-index: 3;
                opacity: 0.21;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
    .nav-item{
        .active-class{
            background-color: var(--primary-color);
        }
    }
    footer{
        border: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }

`

export default Navigation