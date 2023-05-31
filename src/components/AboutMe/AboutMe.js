import React, { useState } from 'react';
import './AboutMe.css';
import EditButton from '../Buttons/EditButton/EditButton';

const AboutMe = () => {
  const [aboutMe, setAboutMe] =
    useState(`Joe Biden is a seasoned statesman with a deep commitment to public service. 
  Throughout his career, he has demonstrated a strong dedication to fighting for the rights and well-being of all Americans. 
  As President of the United States, he strives to unite the nation, tackle pressing challenges, and build a brighter future. 
  With his experience, compassion, and resilience, Joe Biden is focused on delivering meaningful change, promoting equity, and restoring America's standing in the world. 
  He embodies leadership that prioritizes empathy, unity, and progress for a better tomorrow.`);
  let [isFormVisible, setFormVisibility] = useState(false);

  const updateAboutMe = (aboutMeInput) => {
    setAboutMe(aboutMeInput);
  };

  const updateFormVisibility = () => {
    setFormVisibility((isFormVisible = !isFormVisible));
  };

  return (
    <div>
      <div>
        {!isFormVisible && (
          <div className='about-me-container'>
            <div className='about-me-details'>
              <div>{aboutMe}</div>
            </div>
            <EditButton onClick={updateFormVisibility} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
