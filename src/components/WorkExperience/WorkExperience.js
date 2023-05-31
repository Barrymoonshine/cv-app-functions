import React, { useState } from 'react';
import './WorkExperience.css';
import EditButton from '../Buttons/EditButton/EditButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import AddNewButton from '../Buttons/AddNewButton/AddNewButton';
import uniqid from 'uniqid';
import WorkExperienceForm from '../WorkExperienceForm/WorkExperienceForm';

const WorkExperience = () => {
  const [experiences, setExperience] = useState([
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
      role: 'New',
      organisation: 'New',
      dateFrom: 'New',
      dateTo: 'New',
      responsibilities: `New`,
    };
    setExperience((prevState) => [...prevState, newExperience]);
  };

  const updateFormVisibility = (boolean) => {
    setExperience((prevState) => ({
      ...prevState,
      isFormVisible: boolean,
    }));
  };

  const deleteExperience = (id) => {
    setExperience((prevState) => {
      return prevState.filter((experience) => experience.id !== id);
    });
  };

  const updateExperience = (
    idSelected,
    roleInput,
    organisationInput,
    dateFromInput,
    dateToInput,
    responsibilitiesInput
  ) => {
    setExperience((prevState) => {
      prevState.map((experience) => {
        if (experience.id === id) {
          return {
            ...experience,
            id: idSelected,
            role: roleInput,
            organisation: organisationInput,
            dateFrom: dateFromInput,
            dateTo: dateToInput,
            responsibilities: responsibilitiesInput,
          };
        }
        return experience;
      });
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
              <EditButton
                key={uniqid()}
                onClick={() => updateFormVisibility(true)}
              />
              <DeleteButton
                key={uniqid()}
                className='delete-button'
                onClick={() => deleteExperience(experience.id)}
              />
            </div>
          )}
          <WorkExperienceForm
            key={uniqid()}
            experienceId={experience.id}
            isFormVisible={experience.isFormVisible}
            updateExperience={updateExperience}
            updateFormVisibility={updateFormVisibility}
            updateFormVisibilityCallBack={this.updateFormVisibilityCallBack}
          />
        </div>
      ))}
      <AddNewButton onClick={addExperience} text={'+ Work experience'} />
    </div>
  );
};

export default WorkExperience;
