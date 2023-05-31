import './AddressForm.css';
import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const AddressForm = (props) => {
  const [inputField, setInputField] = useState({
    firstLineInput: '',
    secondLineInput: '',
    cityInput: '',
    zipCodeInput: '',
    countryInput: '',
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
    const {
      firstLineInput,
      secondLineInput,
      cityInput,
      zipCodeInput,
      countryInput,
    } = e.target;
    props.updateAddress(
      firstLineInput.value,
      secondLineInput.value,
      cityInput.value,
      zipCodeInput.value,
      countryInput.value
    );
    props.updateFormVisibility(false);
  };

  return (
    <div>
      {props.isFormVisible && (
        <div className='address-container'>
          <form onSubmit={handleSubmit}>
            <label>Address line 1:</label>
            <input
              type='text'
              name='firstLineInput'
              value={inputField.firstLineInput}
              onChange={handleInputs}
              minLength='1'
              required
            />
            <label>Address line 2:</label>
            <input
              type='text'
              name='secondLineInput'
              value={inputField.secondLineInput}
              onChange={handleInputs}
              required
            />
            <label>City:</label>
            <input
              type='text'
              name='cityInput'
              value={inputField.cityInput}
              onChange={handleInputs}
              required
            />
            <label>ZIP/ Post code</label>
            <input
              type='text'
              name='zipCodeInput'
              value={inputField.zipCodeInput}
              onChange={handleInputs}
              required
            />
            <label>Country</label>
            <input
              type='text'
              name='countryInput'
              value={inputField.countryInput}
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

export default AddressForm;
