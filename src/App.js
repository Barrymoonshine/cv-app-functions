import './App.css';
import Name from './components/Name/Name';
import Address from './components/Address/Address';
import AboutMe from './components/AboutMe/AboutMe';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <main>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <div className='left-container'>
            <Name />
            <Address />
            <AboutMe />
          </div>
          <div className='right-container'>
            <div className='sub-titles'> Work experience</div>
            <WorkExperience />
            <div className='sub-titles'>Education</div>
            <Education />
            <div className='sub-titles'>Skills</div>
            <Skills />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
