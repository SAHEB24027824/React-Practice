import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink style={({isActive})=>{return {color:isActive?'green':'white'}}} className='navbar_link' to='/home'>Home</NavLink>
            <NavLink style={({isActive})=>{return {color:isActive?'green':'white'}}} className='navbar_link' to='/about'>About</NavLink>
            <NavLink style={({isActive})=>{return {color:isActive?'green':'white'}}} className='navbar_link' to='/user'>Users</NavLink>
        </div>
    );
}

export default Navbar;
