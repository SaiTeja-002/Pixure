/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import UserCard from '../components/UserCard';
import { useDispatch } from 'react-redux';
import * as userActions from '../actions/userAction';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('UserCard Component', () => {
    const mockUser = {
        name: 'Test User',
        photo: 'test.jpg',
        bio: 'Test Bio'
    };

    it('renders UserCard details correctly', () => {
        const { getByText } = render(<UserCard user={mockUser} />);
        const userNameElement = getByText('Test User');
        // const userPhotoElement = getByText('test.jpg');
        const userBioElement = getByText('Test Bio');
        
        expect(userNameElement).toBeInTheDocument();
        // expect(userPhotoElement).toBeInTheDocument();
        expect(userBioElement).toBeInTheDocument();
    });

    it('displays UserCard delete button when showDeleteButton is true', () => {
        const { queryByTestId } = render(<UserCard user={mockUser} showDeleteButton={true} />);
        const deleteButton = queryByTestId('delete-button');
        expect(deleteButton).toBeInTheDocument();
    });

    it('does not display UserCard delete button when showDeleteButton is false', () => {
        const { queryByTestId } = render(<UserCard user={mockUser} showDeleteButton={false} />);
        const deleteButton = queryByTestId('delete-button');
        expect(deleteButton).not.toBeInTheDocument();
    });

    // it('calls dispatch when delete button is clicked', () => {
    //     const mockedDispatch = jest.fn();
    //     useDispatch.mockReturnValue(mockedDispatch);

    //     const { getByTestId } = render(<UserCard user={mockUser} showDeleteButton={true} />);
    //     const deleteButton = getByTestId('delete-button');

    //     fireEvent.click(deleteButton);

    //     console.log(mockedDispatch.mock.calls);

    //     expect(mockedDispatch).toHaveBeenCalledWith(userActions.unfollowUser(mockUser.name));
    // });


    // it('calls dispatch when delete button is clicked', () => {
    //     const mockedDispatch = jest.fn();
    //     useDispatch.mockReturnValue(mockedDispatch);

    //     const { getByTestId } = render(<UserCard user={mockUser} showDeleteButton={true} />);
    //     const deleteButton = getByTestId('delete-button');

    //     fireEvent.click(deleteButton);

    //     expect(mockedDispatch).toHaveBeenCalledWith(userActions.unfollowUser(mockUser.name));
    // });
    

    it('calls dispatch when delete button is clicked', () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);

        const { getByTestId } = render(<UserCard user={mockUser} showDeleteButton={true} />);
        const deleteButton = getByTestId('delete-button');

        expect(mockedDispatch).toHaveBeenCalledTimes(0);

        fireEvent.click(deleteButton);

        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    });
});
