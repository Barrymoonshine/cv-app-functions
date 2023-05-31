import './EditButton.css';

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='edit-button'>
      Edit
    </button>
  );
};

export default EditButton;
