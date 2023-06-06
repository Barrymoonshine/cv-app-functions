import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const SkillsForm = (props) => {
  const [skillInput, setSkillInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { skillInput } = e.target;
    props.updateSkill(props.skillId, skillInput.value);
  };

  const handleInput = (event) => {
    setSkillInput(event.target.value);
  };

  return (
    <div>
      {props.isFormVisible && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Skill:</label>
            <input
              type='text'
              name='skillInput'
              value={skillInput}
              onChange={handleInput}
              required
            />
            <SubmitButton />
          </form>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;
