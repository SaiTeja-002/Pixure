/** @jest-environment jsdom */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import * as authActions from '../actions/authAction';

jest.mock('../actions/authAction', () => ({
  login: jest.fn(),
}));

jest.mock('../images/logo1.png', () => 'logo');

describe('LoginPage', () => {
  test('handles input changes correctly', () => {
    render(<LoginPage />);
    
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });

    expect(screen.getByLabelText(/username/i).value).toBe('testuser');
    expect(screen.getByLabelText(/password/i).getAttribute('value')).toBe('testpassword');
  });

  test('calls handleLogin on button click', async () => {
    render(<LoginPage />);
    
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(authActions.login).toHaveBeenCalledWith('testuser', 'testpassword');
    });
  });

  test('navigates to signup page on "New user? Signup" click', () => {
    delete window.location;
    window.location = { href: '' };

    render(<LoginPage />);
    
    fireEvent.click(screen.getByText(/new user\? signup/i));

    expect(window.location.href).toBe('/signup');
  });
});
