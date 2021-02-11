// Imports

import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

//initial test without errors
test('render ContactForm component without errors', () => {
    // Arrange
    render(<ContactForm />);
})

test('User fill out contact form and submit it', async () => {
    // Arrange
    render(<ContactForm />);

     // 1. Get our first name, last name, email, and message input fields.
    // Act
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button');

     // 2. Type values into our input fields.
     userEvent.type(firstName, 'Edd');
     userEvent.type(lastName, 'Burke');
     userEvent.type(email, 'bluebill1049@hotmail.com');
     userEvent.type(message, 'Hello, my name is Edd Burke!');
     userEvent.click(submitButton);

     // Assert
     const validFirstName = await screen.findByText(/Edd/i);
     const validLastName = await screen.findByText(/Burke/i);
     const validEmail = await screen.findByText(/bluebill1049@hotmail.com/i);
     const validMessage = await screen.findByText(/Hello, my name is Edd Burke!/i);

     expect(validFirstName).toBeInTheDocument();
     expect(validLastName).toBeInTheDocument();
     expect(validEmail).toBeInTheDocument();
     expect(validMessage).toBeInTheDocument();

})