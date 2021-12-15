import React from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Notes');
  expect(linkElement).toBeInTheDocument();
});
