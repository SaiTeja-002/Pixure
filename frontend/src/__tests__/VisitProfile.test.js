/** @jest-environment jsdom */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import VisitProfile from '../pages/VisitProfile';
import PostLayout from '../components/PostLayout';

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn().mockReturnValue({ pathname: '/mock-path' }),
}));

describe('VisitProfile component', () => {
    const mockProfile = {
        name: 'Test User',
        bio: 'Test bio',
        photo: 'test.jpg',
        posts: [],
        followerCount: 0,
        followingCount: 0,
        isFollowing: false,
    };

    beforeEach(() => {
        jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(() => mockProfile);
    });

    it('renders profile information correctly', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <VisitProfile name="Test User" />
            </Router>
        );
        expect(getByText('Test User')).toBeInTheDocument();
        expect(getByText('Test bio')).toBeInTheDocument();
        expect(getByAltText('Profile Picture')).toBeInTheDocument();
    });

    it('displays correct post count', () => {
        const mockProfileWithPosts = {
            ...mockProfile,
            posts: [{ id: 1, content: 'Test post 1' }, { id: 2, content: 'Test post 2' }],
        };
        jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(() => mockProfileWithPosts);

        const { getByText } = render(
            <Router>
                <VisitProfile name="Test User" />
            </Router>
        );

        expect(getByText('Posts')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
    });

    it('displays Follow/Unfollow button based on isFollowing flag', () => {
        const mockProfileIsFollowing = {
            ...mockProfile,
            isFollowing: false,
        };
        jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(() => mockProfileIsFollowing);

        const { getByText } = render(
            <Router>
                <VisitProfile name="Test User" />
            </Router>
        );

        expect(getByText('Follow')).toBeInTheDocument();
    });
});
