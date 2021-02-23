import { useState, useEffect } from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [showForm, setShowForm] = useState(false);

  let toggleForm = () =>{
    setShowForm(showForm ? false : true);
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  // Get Task list from server
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data; // JSONified.
  };

  // Get specific task from server.
  const fetchTask = async (id) => {
     const res = await fetch(`http://localhost:5000/tasks/${id}`);
     const data = await res.json();

     return data;
  };


  // Handle Double Click to activate an event.
  const handleDoubleClick = async (id) => {

    const taskToToggle = await fetchTask(id); //Returns an array. Don't know why though.
    // Flip the reminder of fetched task
    const updTask = { ...taskToToggle, reminder : !taskToToggle.reminder }; 
    // Update that task in array.
    console.log(updTask);
    setTasks(
      tasks.map((task) => {
        return task.id === id ? {...task, reminder: updTask.reminder } : task;
      })
    );
  }

  // Allow user to click on the delete icon.
  const handleDelete = async (id) => {
    let taskToDelete = await fetchTask(id);
    taskToDelete = taskToDelete[0];

    // Delete it.
    setTasks (
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  return (
    <div className="App">
    <div className="container">
      <Header 
        toggleForm = {toggleForm} 
        showForm = {showForm}
      />
      <Tasks 
        handleDelete = {handleDelete}
        handleDoubleClick = {handleDoubleClick}
        tasks = {tasks}
      />
      { showForm && <Form /> }
    </div>
    </div>
  );
}

export default App;
