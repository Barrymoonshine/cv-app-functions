import './ContactForm.css';
import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const ContactForm = (props) => {
  const [inputField, setInputField] = useState({
    phoneNoInput: '',
    emailInput: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phoneNoInput, emailInput } = e.target;
    props.updateContacts(phoneNoInput.value, emailInput.value);
    props.updateFormVisibility();
  };

  return (
    <div>
      {props.isFormVisible && (
        <div className='contact-container'>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type='email'
              name='emailInput'
              minLength='4'
              required
              value={inputField.emailInput}
              onChange={handleInputs}
            />
            <label>Phone Number</label>
            <input
              type='tel'
              name='phoneNoInput'
              value={inputField.phoneNoInput}
              onChange={handleInputs}
              required
            />
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
