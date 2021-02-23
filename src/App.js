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

    const taskToToggle = await fetchTask(id); //Fetch task from db.
    // Flip the reminder of fetched task
    const updTask = { ...taskToToggle, reminder : !taskToToggle.reminder }; 

    // Put updated version of Task in DB.
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updTask)
    });

    // Get updated task from DB for updating the one we are displaying.
    const data = await res.json();

    // Update that task in display.
    setTasks(
      tasks.map((task) => {
        return task.id === id ? {...task, reminder: data.reminder } : task;
      })
    );
  }

  // Allow user to click on the delete icon.
  const handleDelete = async (id) => {
    const taskToDelete = await fetchTask(id); //Fetch task to Delete.

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    // Check whether the delete was a sucess.
    res.status === 200 // 200 is return status of OK.
    ? setTasks(tasks.filter((task) => task.id !== id)) // Delete Task from display.
    : alert("Couldn't delete that task");
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
