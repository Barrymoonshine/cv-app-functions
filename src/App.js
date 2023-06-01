import './App.css';
import Name from './components/Name/Name';
import Address from './components/Address/Address';
import AboutMe from './components/AboutMe/AboutMe';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
