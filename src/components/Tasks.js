import { useState } from 'react';
import Task from './Task';

const Tasks = () => {

    const tasksArr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "date": "Friday, Feb 26",
            "reminder": true
          },
          {
            "userId": 2,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "date": "Wednesday, Feb 24",
            "reminder": true
          },
          {
            "userId": 3,
            "id": 3,
            "title": "fugiat veniam minus",
            "date": "Monday, Feb 22",
            "reminder": false
          }
    ];

    const [tasks, setTasks] = useState(tasksArr);

    const fetchTask = async (id) => {
      const task = await tasks.filter( t => t.id === id);
      return task;
    }

    const updateData = async (task) => {
      const newData = await tasks.map((s_task) => {
        // Compare id of current task(c_task) with id of passed task(task).
        // If they match, then spread contents of c_task BUT change its reminder to look like that of passed task.
        // It is this new task that we return.
        // s_task.id === task.id ? { ...s_task, reminder: task.reminder } : s_task;
      });

      return newData;
    }

    const handleDoubleClick = async (id) => {

      let taskToToggle = await fetchTask(id); //Returns an array. Don't know why though.
      taskToToggle = taskToToggle[0]; // Remove from the array and make it an object.
      // Flip the reminder of fetched task
      const updTask = { ...taskToToggle, reminder : !taskToToggle.reminder }; 
      // Update that task in array.
      // const updatedTask = await updateData(updTask);
      setTasks(
        tasks.map((task) => {
          return task.id === id ? {...task, reminder: updTask.reminder } : task;
        })
      );

      // setTasks(updtArray);
    }

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
        <div className="tasks-container">
            {tasks.map((task) => (
                <Task 
                  key={task.id} 
                  task={task} 
                  handleDoubleClick={handleDoubleClick}
                  handleDelete={handleDelete}
                 />
            ))}
        </div>
        
     );
}
 
export default Tasks;