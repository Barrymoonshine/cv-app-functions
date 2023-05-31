import React, { useState } from 'react';
import './Address.css';
import EditButton from '../Buttons/EditButton/EditButton';

const Address = () => {
  const [state, setState] = useState({
    firstLine: 'The White House',
    secondLine: '1600 Pennsylvania Avenue',
    city: 'NW Washington',
    zipCode: ' DC 20500',
    country: 'USA',
    isFormVisible: false,
  });

  const updateFormVisibility = (boolean) => {
    setState((prevState) => ({
      ...prevState,
      isFormVisible: boolean,
    }));
  };

  return (
    <div>
      <div>
        {!state.isFormVisible && (
          <div className='address-container'>
            <div className='address-details'>
              <div>{state.firstLine}</div>
              <div>{state.secondLine}</div>
              <div>{state.city}</div>
              <div>{state.zipCode}</div>
              <div>{state.country}</div>
            </div>
            <EditButton onClick={() => updateFormVisibility(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
