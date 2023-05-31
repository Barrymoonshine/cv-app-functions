import React, { useState } from 'react';
import './Name.css';
import NameForm from '../NameForm/NameForm';
import EditButton from '../Buttons/EditButton/EditButton';

const Name = () => {
  const [firstName, setFirstName] = useState('Joe');
  const [secondName, setSecondName] = useState('Biden');
  let [isFormVisible, setFormVisibility] = useState(false);

  const updateName = (firstNameInput, secondNameInput) => {
    setFirstName(firstNameInput);
    setSecondName(secondNameInput);
  };

  const updateFormVisibility = () => {
    console.log('updateFormVisibility clicked');
    setFormVisibility((isFormVisible = !isFormVisible));
  };

  return (
    <div>
      <div>
        {!isFormVisible && (
          <div className='name-container'>
            <div className='names'>
              <div>{firstName}</div>
              <div>{secondName}</div>
            </div>
            <EditButton onClick={updateFormVisibility} />
          </div>
        )}
      </div>
      <div>
        <NameForm
          isFormVisible={isFormVisible}
          updateName={updateName}
          updateFormVisibility={updateFormVisibility}
        />
      </div>
    </div>
  );
};

export default Name;
