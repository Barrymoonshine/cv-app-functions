import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstNameInput, secondNameInput } = e.target;
    props.updateName(firstNameInput.value, secondNameInput.value);
    props.updateFormVisibility();
  };

  return (
    <div>
      {props.isFormVisible && (
        <div className='name-container'>
          <form onSubmit={handleSubmit}>
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
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default NameForm;
