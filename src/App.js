
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask/>
      <Filter />
      <TaskList/>
    </div>
  );
}

export default App;
