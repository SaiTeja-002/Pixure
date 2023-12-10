import React, { useState } from 'react';
import '../styles/Header.css'
import { NavLink, useLocation } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { TextField } from '@mui/material'
import { HOMEHREF } from '../constants';

const EmptyContainer = () => (
    <div className="empty-container" style={{ width: '100%', height: '56px' }} />
);

const Header = ({ onSearchSubmit }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [searchText, setSearchText] = useState('');

    //Search Title or Person
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let type = 'title';
            let data = searchText;

            if (searchText.startsWith('@')) {
                type = 'person';
                data = searchText.slice(1);
            }

            onSearchSubmit(type, data);
        }
    };

    //BackSpace = Clear textfield
    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            setSearchText('');
            onSearchSubmit('random', '');
        }
    };

    return (
        <header className='header-style'>
            <div className="logo">
                <NavLink to="/">
                    <h3>Pixure</h3>
                </NavLink>
            </div>

            {currentPath === HOMEHREF ? (
                <div className="search-bar">
                    <TextField
                        fullWidth
                        label='Search'
                        InputProps={{
                            style: {
                                borderRadius: "10px"
                            }
                        }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        onKeyDown={handleKeyDown}

                    />
                </div>
            ) : <EmptyContainer />}

            <NavLink to="/profile">
                <PersonRoundedIcon className='profile-icon' style={{ fontSize: '2rem' }} />
            </NavLink>
        </header>
    );
};

export default Header;
