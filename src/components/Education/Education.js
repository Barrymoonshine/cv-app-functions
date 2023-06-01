import React, { useState } from 'react';
import './Education.css';
import EditButton from '../Buttons/EditButton/EditButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import AddNewButton from '../Buttons/AddNewButton/AddNewButton';
import uniqid from 'uniqid';
import EducationForm from '../EducationForm/EducationForm';

const Education = () => {
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      institute: 'Syracuse University College of Law',
      subject: 'Juris Doctor (J.D.)',
      grade: 'Pass',
      level: 'Doctorate',
      dateFrom: '1965',
      dateTo: '1968',
      isFormVisible: false,
    },
    {
      id: uniqid(),
      institute: 'University of Delaware',
      subject: 'Bachelor of Arts in Political Science',
      grade: 'Pass',
      level: 'Degree',
      dateFrom: '1962',
      dateTo: '1965',
      isFormVisible: false,
    },
  ]);

  const addEducation = () => {
    const newEducation = {
      id: uniqid(),
      institute: '',
      subject: '',
      grade: '',
      level: '',
      isFormVisible: false,
    };
    setEducation((prevState) => [...prevState, newEducation]);
  };

  const updateFormVisibility = (boolean, id) => {
    const updatedArray = education.map((qualification) => {
      if (qualification.id === id) {
        return {
          ...qualification,
          isFormVisible: boolean,
        };
      }
      return qualification;
    });
    setEducation(updatedArray);
  };

  const deleteEducation = (id) => {
    setEducation((prevState) => {
      return prevState.filter((education) => education.id !== id);
    });
  };

  const updateEducation = (
    id,
    instituteInput,
    subjectInput,
    gradeInput,
    levelInput
  ) => {
    const updatedArray = education.map((qualification) => {
      if (qualification.id === id) {
        return {
          ...qualification,
          institute: instituteInput,
          subject: subjectInput,
          grade: gradeInput,
          level: levelInput,
          isFormVisible: false,
        };
      }
      return qualification;
    });
    setEducation(updatedArray);
  };

  return (
    <div className='education-container'>
      {education.map((qualification) => (
        <div key={qualification.id} className='education-details'>
          {!qualification.isFormVisible ? (
            <div>
              <div className='institute'>
                <div className='head'>{qualification.institute} : </div>
                &nbsp; {qualification.subject}, {qualification.grade}
              </div>
              <div className='level-year'>
                <div className='head'> {qualification.level} : </div>
                &nbsp; {qualification.dateFrom} - {qualification.dateTo}
              </div>
              <EditButton
                onClick={() => updateFormVisibility(true, qualification.id)}
              />
              <DeleteButton onClick={() => deleteEducation(qualification.id)} />
            </div>
          ) : (
            <EducationForm
              qualificationId={qualification.id}
              isFormVisible={qualification.isFormVisible}
              updateEducation={updateEducation}
            />
          )}
        </div>
      ))}
      <AddNewButton onClick={addEducation} text={'+ Education'} />
    </div>
  );
};

export default Education;
