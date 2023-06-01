import React, { useState } from 'react';
import './EducationForm.css';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const EducationForm = (props) => {
  const [educationInput, setEducationInput] = useState({
    instituteInput: '',
    subjectInput: '',
    gradeInput: '',
    dateFromInput: '',
    dateToInput: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEducationInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      instituteInput,
      subjectInput,
      gradeInput,
      dateFromInput,
      dateToInput,
    } = e.target;
    props.updateEducation(
      props.qualificationId,
      instituteInput.value,
      subjectInput.value,
      gradeInput.value,
      dateFromInput.value,
      dateToInput.value
    );
  };

  return (
    <div>
      {props.isFormVisible && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className='top-inputs'>
              <label>Institute:</label>
              <input
                type='text'
                name='instituteInput'
                value={educationInput.instituteInput}
                onChange={handleInput}
                required
              />
              <label>Subject :</label>
              <input
                type='text'
                name='subjectInput'
                value={educationInput.subjectInput}
                onChange={handleInput}
                required
              />
              <label>Grade :</label>
              <input
                type='text'
                name='gradeInput'
                value={educationInput.gradeInput}
                onChange={handleInput}
                required
              />
            </div>
            <div className='bottom-inputs'>
              <label>Date from:</label>
              <input
                type='text'
                name='dateFromInput'
                value={educationInput.dateFromInput}
                onChange={handleInput}
                placeholder='YYYY'
                required
              />
              <label>Date to:</label>
              <input
                type='text'
                name='dateToInput'
                value={educationInput.dateToInput}
                onChange={handleInput}
                placeholder='YYYY'
                required
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
