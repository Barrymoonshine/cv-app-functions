import './DeleteButton.css';
import deleteIcon from '../../../assets/delete.png';

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='delete-button'>
      <img src={deleteIcon} className='delete-image' alt='delete'></img>
    </button>
  );
};

export default DeleteButton;
