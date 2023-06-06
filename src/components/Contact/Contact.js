import React, { useState } from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';
import EditButton from '../Buttons/EditButton/EditButton';

const Contact = () => {
  const [state, setState] = useState({
    phoneNo: 2024561414,
    email: 'papajoe1@aol.com',
    isFormVisible: false,
  });

  const updateFormVisibility = (boolean) => {
    setState((prevState) => ({
      ...prevState,
      isFormVisible: boolean,
    }));
  };

  const updateContacts = (phoneNoInput, emailInput) => {
    setState((prevState) => ({
      ...prevState,
      phoneNo: phoneNoInput,
      email: emailInput,
    }));
  };

  return (
    <div>
      <div>
        {!state.isFormVisible && (
          <div className='contact-container'>
            <div className='contact-details'>
              <div>{state.phoneNo}</div>
              <div>{state.email}</div>
            </div>
            <EditButton onClick={updateFormVisibility} />
          </div>
        )}
      </div>
      <div>
        <ContactForm
          isFormVisible={state.isFormVisible}
          updateFormVisibility={updateFormVisibility}
          updateContacts={updateContacts}
        />
      </div>
    </div>
  );
};

export default Contact;
