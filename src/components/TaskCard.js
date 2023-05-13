import '../style/TaskCard.scss';

import editButton from '../editButton.svg';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../store/changeTaskListSlice';
import { changeModalStatus,changeingTask } from '../store/modalSilce';



const TaskCard = ({ task }) => {

    const dispatch = useDispatch(); 

    const modalToggle = () => {
        document.body.style.overflow = "hidden";
        dispatch(changeModalStatus());
    }

    const deleteTaskCard = () => {
        dispatch(deleteTask ({
            status: task.status,
            priority: task.priority,
            id: task.id
        }))
    }

    const editTask = () => {
        dispatch(changeingTask({
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
            id: task.id
        }))
        modalToggle();
    }

    return (
        <div className="taskCard">
            <div className="top">
                <h3>{task.title}</h3>
                <span onClick={deleteTaskCard}>X</span>
            </div>
            <div className="text">
                <span>{task.description}</span>
            </div>
            <div className="bottom">
                <img src={editButton} alt={editButton} onClick={editTask}/>
                <h4>{task.priority === "0" ? "high" : task.priority === "1" ? "normal" : "low"}</h4>
            </div>
        </div>
    );
}
  
export default TaskCard;