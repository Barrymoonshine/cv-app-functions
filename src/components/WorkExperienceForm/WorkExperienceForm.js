import React, { useState } from 'react';
import './WorkExperienceForm.css';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const WorkExperienceForm = (props) => {
  const [experienceInput, setExperienceInput] = useState({
    roleInput: '',
    organisationInput: '',
    dateFromInput: '',
    dateToInput: '',
    responsibilitiesInput: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setExperienceInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      roleInput,
      organisationInput,
      dateFromInput,
      dateToInput,
      responsibilitiesInput,
    } = e.target;
    props.updateExperience(
      props.experienceId,
      roleInput.value,
      organisationInput.value,
      dateFromInput.value,
      dateToInput.value,
      responsibilitiesInput.value
    );
  };

  return (
    <div>
      {props.isFormVisible && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className='top-inputs'>
              <label>Role:</label>
              <input
                type='text'
                name='roleInput'
                value={experienceInput.roleInput}
                onChange={handleInput}
                required
              />
              <label>Organisation :</label>
              <input
                type='text'
                name='organisationInput'
                value={experienceInput.organisationInput}
                onChange={handleInput}
                required
              />
            </div>
            <div className='bottom-inputs'>
              <label>Date from:</label>
              <input
                type='number'
                max='9999'
                name='dateFromInput'
                value={experienceInput.dateFromInput}
                onChange={handleInput}
                placeholder='YYYY'
                required
              />
              <label>Date to:</label>
              <input
                type='text'
                max='7'
                name='dateToInput'
                value={experienceInput.dateToInput}
                onChange={handleInput}
                placeholder='YYYY or Present'
                required
              />
            </div>
            <label>Responsibilities:</label>
            <textarea
              type='text'
              name='responsibilitiesInput'
              value={experienceInput.responsibilitiesInput}
              onChange={handleInput}
              placeholder='Provide a brief description of your responsibilities'
              required
            />
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceForm;
