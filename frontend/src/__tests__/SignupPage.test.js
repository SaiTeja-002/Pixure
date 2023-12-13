/** @jest-environment jsdom */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from '../pages/SignupPage';
import * as authActions from '../actions/authAction';

jest.mock('../actions/authAction', () => ({
  signup: jest.fn(),
}));

jest.mock('../images/logo1.png', () => 'logo');

describe('SignupPage', () => {
  test('handles input changes correctly', () => {
    render(<SignupPage />);
    
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'testemail' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });

    expect(screen.getByLabelText(/Email/i).value).toBe('testemail');
    expect(screen.getByLabelText(/Username/i).value).toBe('testuser');
    expect(screen.getByLabelText(/password/i).getAttribute('value')).toBe('testpassword');
  });

  test('calls handleSignup on button click', async () => {
    render(<SignupPage />);
    
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'testemail' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    await waitFor(() => {
      expect(authActions.signup).toHaveBeenCalledWith('testemail', 'testuser', 'testpassword');
    });
  });

  test('navigates to login page on "Back to Login" click', () => {
    delete window.location;
    window.location = { href: '' };

    render(<SignupPage />);
    
    fireEvent.click(screen.getByText(/already have an account\? Login/i));

    expect(window.location.href).toBe('/login');
  });
});
