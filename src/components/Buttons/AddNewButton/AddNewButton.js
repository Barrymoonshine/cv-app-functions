import './AddNewButton.css';

const AddNewButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className='add-new-button'>
      {text}
    </button>
  );
};

export default AddNewButton;
