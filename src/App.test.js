import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

//initial test without errors
test('render App component without errors', () => {
    render(<App />);
})