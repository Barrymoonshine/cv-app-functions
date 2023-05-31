import './App.css';
import Name from './components/Name/Name';
import Address from './components/Address/Address';

const App = () => {
  return (
    <div>
      <main>
        <div className='title'>CV generator</div>
        <div className='cv-container'>
          <div className='left-container'>
            <Name />
            <Address />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
