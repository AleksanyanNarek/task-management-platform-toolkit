import './style/App.scss';

import Nav from './components/Nav';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="taskPlatform">
        <TaskList title="To Do" number={0} />
        <TaskList title="Doing" number={1} />
        <TaskList title="Done" number={2} />
      </div>
    </div>
  );
}

export default App;
