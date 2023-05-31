import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='delete-button'>
      Delete
    </button>
  );
};

export default DeleteButton;
