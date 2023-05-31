import React, { useState } from 'react';

const Name = () => {
  const [firstName, setFirstName] = useState('Joe');
  const [secondName, setSecondName] = useState('Biden');

  return (
    <div>
      <div>{firstName}</div>
      <div>{secondName}</div>
    </div>
  );
};

export default Name;
