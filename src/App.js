import './App.css';
import Name from './components/Name/Name';
import Address from './components/Address/Address';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import workExperienceIcon from './assets/work-experience.png';
import educationIcon from './assets/education.png';
import skillsIcon from './assets/skills.png';

const App = () => {
  return (
    <div>
      <main>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <div className='left-container'>
            <Name />
            <div className='sub-titles'>Contact</div>
            <Address />
            <Contact />
            <div className='sub-titles'>About me</div>
            <AboutMe />
          </div>
          <div className='right-container'>
            <div className='sub-titles'>
              <img
                src={workExperienceIcon}
                className='work-experience-icon'
                alt='Work experience'
              ></img>
              &nbsp; Work experience
            </div>
            <WorkExperience />
            <div className='sub-titles'>
              <img
                src={educationIcon}
                className='education-icon'
                alt='Education'
              ></img>
              &nbsp;Education
            </div>
            <Education />
            <div className='sub-titles'>
              <img src={skillsIcon} className='skills-icon' alt='Skills'></img>
              &nbsp;Skills
            </div>
            <Skills />
          </div>
        </div>
      </main>
      <div className='footer'>
        <p>
          © Made by
          <a href='https://github.com/Barrymoonshine'>Barry Moonshine</a> for
          <a href='https://www.theodinproject.com/'>The Odin Project</a>
          Icons by{' '}
          <a target='_blank' href='https://icons8.com' rel='noreferrer'>
            Icons8
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
