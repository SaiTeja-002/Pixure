import React from 'react';
import '../styles/Header.css'
import { NavLink, useLocation } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const EmptyContainer = () => (
    <div className="empty-container" style={{ width: '100%', height: '56px' }} />
);

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className='header-style'>
            <div className="logo">
                <NavLink to="/">
                    <h3>Pixure</h3>
                </NavLink>
            </div>

            {currentPath === "/" ? (
                <div className="search-bar">
                <TextField
                    fullWidth
                    label='Search'
                    // variant='filled'
                    InputProps={{
                        style: {
                            borderRadius: "10px"
                        }
                    }}
                />
            </div>
            ) : <EmptyContainer />}

            <NavLink to="/profile">
                <PersonRoundedIcon className='profile-icon' style={{ fontSize: '2rem' }} />
            </NavLink>
            {/* <NavLink to="/updateprofile">
                <EditIcon className='profile-icon' style={{ fontSize: '2rem' }} />
            </NavLink> */}
        </header>
    );
};

export default Header;
