import './App.css';
import Name from './components/Name/Name';
import Address from './components/Address/Address';
import AboutMe from './components/AboutMe/AboutMe';
import WorkExperience from './components/WorkExperience/WorkExperience';

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
