import React, { useState } from 'react';
import './Skills.css';
import EditButton from '../Buttons/EditButton/EditButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import AddNewButton from '../Buttons/AddNewButton/AddNewButton';
import uniqid from 'uniqid';
import SkillsForm from '../SkillsForm/SkillsForm';

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      id: uniqid(),
      skill: 'Strong leadership and decision-making abilities',
      isFormVisible: false,
    },
    {
      id: uniqid(),
      skill: 'Exceptional public speaking and communication skills',
      isFormVisible: false,
    },
  ]);

  const addSkill = () => {
    const newSkill = {
      id: uniqid(),
      skill: 'New',
      isFormVisible: false,
    };
    setSkills((prevState) => [...prevState, newSkill]);
  };

  const updateFormVisibility = (boolean, id) => {
    const updatedArray = skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          isFormVisible: boolean,
        };
      }
      return skill;
    });
    setSkills(updatedArray);
  };

  const deleteSkill = (id) => {
    setSkills((prevState) => {
      return prevState.filter((skill) => skill.id !== id);
    });
  };

  const updateSkill = (id, skillInput) => {
    const updatedArray = skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          skill: skillInput,
          isFormVisible: false,
        };
      }
      return skill;
    });
    setSkills(updatedArray);
  };

  return (
    <div className='skills-container'>
      {skills.map((skill) => (
        <div key={skill.id} className='skill-details'>
          {!skill.isFormVisible ? (
            <ul>
              <li>{skill.skill}</li>
              <EditButton
                onClick={() => updateFormVisibility(true, skill.id)}
              />
              <DeleteButton onClick={() => deleteSkill(skill.id)} />
            </ul>
          ) : (
            <SkillsForm
              skillId={skill.id}
              isFormVisible={skill.isFormVisible}
              updateSkill={updateSkill}
            />
          )}
        </div>
      ))}
      <AddNewButton onClick={addSkill} text={'+ Skill'} />
    </div>
  );
};

export default Skills;
