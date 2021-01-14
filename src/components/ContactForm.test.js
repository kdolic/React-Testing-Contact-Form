import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test('render ContactForm component without errors', async ()=> {
    //ARRANGE
    render(<ContactForm />);

    //ACT
    // 1. Get our first name, last name, email, and message input fields.
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    // 2. Type values into our input fields.
    userEvent.type(firstNameInput, 'Kenan');
    userEvent.type(lastNameInput, 'Dolic');
    userEvent.type(emailInput, 'lambdatest@gmail.com');
    userEvent.type(messageInput, 'sprint 1 is done!');
     // 3. Push the submit button.
     const button = screen.getByRole('button');
     userEvent.click(button);

     //ASSERT
     const newFirstName = await screen.findByText(/Kenan/i);
     const newLastName = await screen.findByText(/Dolic/i);
     const newEmail = await screen.findByText(/lambdatest@gmail.com/i);
     const newMessage = await screen.findByText(/sprint 1 is done!/i);
     expect(newFirstName).toBeInTheDocument();
     expect(newLastName).toBeInTheDocument();
     expect(newEmail).toBeInTheDocument();
     expect(newMessage).toBeInTheDocument();
})