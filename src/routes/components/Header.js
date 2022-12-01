import React from "react";
import {Box} from '@mui/material';
import {Link} from "react-router-dom";

import logo from './assets/logo.svg';
import './components.css';

function Header () {
    return (
        <Box className='Head'>
            <Link to="/">
                <img className='ImageTop' src={logo} alt='logo'>
                </img>
            </Link>
        </Box>
    )
}

export default Header;