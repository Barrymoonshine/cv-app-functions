import './NameForm.css';
import React, { useState } from 'react';

const NameForm = (props) => {
  const [inputField, setInputField] = useState({
    firstNameInput: '',
    secondNameInput: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstNameInput, secondNameInput } = e.target;
    props.updateName(firstNameInput.value, secondNameInput.value);
    props.updateFormVisibility();
  };

  return (
    <div>
      {props.isFormVisible && (
        <div className='name-container'>
          <form onSubmit={handleFormSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstNameInput'
              value={inputField.firstNameInput}
              onChange={handleInputs}
              required
            />
            <label>Second name:</label>
            <input
              type='text'
              name='secondNameInput'
              value={inputField.secondNameInput}
              onChange={handleInputs}
              required
            />
            <button className='submit-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NameForm;
