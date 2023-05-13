import '../../style/Modal.scss';

import { v4 }from "uuid";

import { useDispatch, useSelector } from 'react-redux';

import { changeingTask, changeModalStatus } from '../../store/modalSilce';
import { addTask, deleteTask } from '../../store/changeTaskListSlice';

const Modal = () => {
    
    const dispatch = useDispatch();
    
    const TaskData = useSelector((state) => state.modal.changeingTask);

    const modalToggle = () => {
        dispatch(changeModalStatus());
        document.body.style.overflow = "auto";
        if(TaskData) dispatch(changeingTask(null))
    }

    const submit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const fields = Object.fromEntries(formData);

        if(fields.title !== ""){
            fields.id = TaskData?.id || v4();

            if(TaskData){
                dispatch(deleteTask({
                    status: TaskData.status,
                    priority: TaskData.priority,
                    id: TaskData.id
                }));
            }

            dispatch(addTask(fields));
            modalToggle();
        }
    }

    return (
        <div className="modal" onClick={modalToggle}>
            <div className="form" onClick={e => e.stopPropagation()}> 
                <div className="modalTop">
                    <h1>{!TaskData ? "Add your new task" : "Change your task"}</h1>
                </div>
                <form onSubmit={submit}>
                    <div className="inputText" >
                        <h2>Task's title:</h2>
                        <input type="text" placeholder="title" name="title" defaultValue={TaskData?.title || ""} />
                    </div>
                    <div className="inputText" >
                        <h2>Task's description:</h2>
                        <input type="text" placeholder="description" name="description" defaultValue={TaskData?.description || ""}/>
                    </div>
                    <div className="modalBottom">
                        <div className="inputRad">
                            <h2>Task's status:</h2>
                            <div>
                                <div>
                                    <input type="radio" id="toDo" name="status" value="0" defaultChecked={true} />
                                    <label htmlFor="toDo">To do</label>
                                </div>
                                <div>
                                    <input type="radio" id="doing" name="status" value="1" defaultChecked={TaskData?.status === "1"} />
                                    <label htmlFor="doing">Doing</label>
                                </div>
                                <div>
                                    <input type="radio" id="done" name="status" value="2" defaultChecked={TaskData?.status === "2"} />
                                    <label htmlFor="done">Done</label>
                                </div>
                            </div>
                        </div>
                        <div className="inputRad">
                            <h2>Task's priority:</h2>
                            <div>
                                <div>
                                    <input type="radio" id="high" name="priority" value="0" defaultChecked={true}/>
                                    <label htmlFor="high">High</label>
                                </div>  
                                <div>
                                    <input type="radio" id="normal" name="priority" value="1" defaultChecked={TaskData?.priority === "1"} />
                                    <label htmlFor="normal">Normal</label>
                                </div>
                                <div>
                                    <input type="radio" id="low" name="priority" value="2" defaultChecked={TaskData?.priority === "2"} />
                                    <label htmlFor="low">Low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="sub" type="submit"><b>{!TaskData ? "SUBMIT" : "CHANGE"}</b></button>
                        <button className="can" type="reset" onClick={modalToggle}><b>CANCEL</b></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
  
export default Modal;