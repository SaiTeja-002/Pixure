import React, { useEffect, useState } from 'react';
import '../styles/Header.css'
import { NavLink, useLocation } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { TextField, Avatar } from '@mui/material'
import { HOMEHREF, PROFILEHREF } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../actions/userAction';
import { FiLogOut } from "react-icons/fi";

const EmptyContainer = () => (
    <div className="empty-container" style={{ width: '100%', height: '20px' }} />
);

// mock commit
const Header = ({ onSearchSubmit, searchBarText }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [searchText, setSearchText] = useState(searchBarText ? ('@' + searchBarText) : '');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.fetchInfo());

        if(searchBarText && onSearchSubmit){
            onSearchSubmit('person',searchText);
        }
    }, [dispatch])

    let user = useSelector((state) => state.user);

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

    // logout
    const handleLogout = () => {
        // sessionStorage.removeItem('cookie');
        sessionStorage.clear();
        localStorage.clear();
        console.log(sessionStorage);
        window.location.href = HOMEHREF;
    }

    return (
        <header className={`header-style ${currentPath === PROFILEHREF ? 'profile-header' : ''}`}>
            <div className="logo">
                <h3 onClick={() => { window.location.href = '/' }}>Pixure</h3>
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
                {user.photo !== '' ? (
                    <Avatar alt="Profile Picture" src={user.photo} className='profile-icon' />
                ) : (
                    <PersonRoundedIcon className='profile-icon' style={{ fontSize: '2rem' }} />
                )}
            </NavLink>

            <FiLogOut className='logout' onClick={handleLogout} />

        </header>
    );
};

export default Header;
