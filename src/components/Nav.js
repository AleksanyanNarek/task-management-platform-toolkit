import '../style/Nav.scss';

import { useDispatch } from 'react-redux';
import { changeModalStatus } from '../store/modalSilce';

import { useSelector } from 'react-redux';
import Modal from './modal/Modal';

const Nav = () => {

    const modalStatus = useSelector(state => state.modal.modalStatus);

    const dispatch = useDispatch();
    
    const modalToggle = () => {
        document.body.style.overflow = "hidden";
        dispatch(changeModalStatus());
    }

    return (
        <div className="nav">
            <div className="title">
                <h1>TASK MANAGEMENT PLATFORM</h1>
            </div>
            <div className="button">
                <button onClick={modalToggle}>
                    <h3>Add task</h3>
                </button>
            </div>
            {modalStatus && <Modal /> }
        </div>
    );
}
  
export default Nav;