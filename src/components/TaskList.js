import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';

const TaskList = ({title, number}) => {

    const tasks = useSelector((state) => state.tasksList[number]);

    return (
        <div className="tasks">
            <h2>{title}</h2>
            <div className="high">
                {tasks[0].map((task) => (
                    <TaskCard 
                        task={task}
                        key={task.id}
                    />
                ))}
            </div>
            <div className="normal">
                {tasks[1].map((task) => (
                    <TaskCard 
                        task={task}
                        key={task.id}
                    />
                ))}
            </div>
            <div className="low">
                {tasks[2].map((task) => (
                    <TaskCard 
                        task={task}
                        key={task.id}
                    />
                ))}
            </div>
        </div>
    );
}
  
export default TaskList;