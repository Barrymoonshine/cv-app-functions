import React, { useState } from 'react';
import './WorkExperience.css';
import EditButton from '../Buttons/EditButton/EditButton';
import uniqid from 'uniqid';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: uniqid(),
      role: 'President of the United States',
      organisation: 'The White House, Washington, D.C.',
      dateFrom: '2021',
      dateTo: 'Present',
      responsibilities: `Leads the executive branch of the U.S. government, setting the national agenda and guiding policy decisions to address critical issues facing the country.
            Works collaboratively with Congress, forging partnerships to advance legislative priorities, including the American Jobs Plan, the American Families Plan, and the COVID-19 relief packages.
            Promotes unity, social justice, and racial equity, actively addressing systemic inequalities and advocating for reforms in criminal justice, voting rights, and immigration policies.`,
      isFormVisible: false,
    },
    {
      id: uniqid(),
      role: 'Vice-President of the United States',
      organisation: 'The White House, Washington, D.C.',
      dateFrom: '2009',
      dateTo: '2017',
      responsibilities: `Dedicated and experienced public servant with a proven track record of leadership and achievement. 
    Eight years of exceptional service as the Vice-President of the United States under President Barack Obama, where I played a pivotal role in shaping and implementing key policies that fostered economic growth, strengthened national security, and promoted social justice. 
    Adept at navigating complex political landscapes and forging bipartisan collaborations to drive meaningful change. Committed to upholding the values of integrity, empathy, and inclusivity.`,
      isFormVisible: false,
    },
  ]);

  const addExperience = () => {
    const newExperience = {
      id: uniqid(),
      role: '',
      organisation: '',
      dateFrom: '',
      dateTo: '',
      responsibilities: ``,
    };
    setExperiences((prevState) => ({
      state: [...prevState, newExperience],
    }));
  };

  const updateFormVisibility = (id, boolean) => {
    setExperiences((prevState) => {
      const updatedArray = prevState.map((experience) => {
        if (experience.id === id) {
          return { ...experience, isFormVisible: boolean };
        }
        return experience;
      });
      return { experiences: updatedArray };
    });
  };

  return (
    <div className='work-experience-container'>
      {experiences.map((experience) => (
        <div key={uniqid()} className='work-experience-details'>
          {!experience.isFormVisible && (
            <div key={uniqid()}>
              <div key={uniqid()} className='experience-first-line'>
                <div key={uniqid()} className='role'>
                  {experience.role}
                </div>
                <div key={uniqid()}>{experience.organisation}</div>
              </div>
              <div key={uniqid()} className='experience-second-line'>
                <div key={uniqid()}>{experience.dateFrom}</div> &nbsp;-&nbsp;
                <div key={uniqid()}>{experience.dateTo}</div>
              </div>
              <div key={uniqid()} className='responsibilities-details'>
                <div key={uniqid()}>{experience.responsibilities}</div>
              </div>
              <button
                key={uniqid()}
                className='edit-button'
                onClick={() => updateFormVisibility(experience.id, true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
