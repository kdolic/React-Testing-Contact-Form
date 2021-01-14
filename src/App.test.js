import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// initial test
test('render App withour errors', ()=> {
    render(<App />);
})