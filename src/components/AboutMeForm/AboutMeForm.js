import React, { useState } from 'react';
import './AboutMeForm.css';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const AboutMeForm = (props) => {
  const [inputField, setInputField] = useState({
    aboutMeInput: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { aboutMeInput } = e.target;
    props.updateAboutMe(aboutMeInput.value);
    props.updateFormVisibility();
  };

  return (
    <div>
      {props.isFormVisible && (
        <div className='about-me-container'>
          <form onSubmit={handleSubmit}>
            <label>About me:</label>
            <textarea
              name='aboutMeInput'
              maxLength='600'
              placeholder='Provide a brief overview of your skills and experiences with a dash of personality...'
              required
              value={inputField.aboutMeInput}
              onChange={handleInput}
            />
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default AboutMeForm;
