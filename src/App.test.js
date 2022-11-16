import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './pages/Login';

test('renders login', () => {
  render(<Login />);
  const linkElement = screen.getByText('/login/');
  expect(linkElement).toBeInTheDocument();
});
