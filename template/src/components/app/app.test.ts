
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('App', () => {
  test('it should mount', () => {
    render(<App />);
    
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});