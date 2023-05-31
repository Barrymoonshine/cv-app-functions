import './App.css';
import Name from './components/Name/Name';

const App = () => {
  return (
    <div>
      <main>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <div className='left-container'>
            <Name />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
