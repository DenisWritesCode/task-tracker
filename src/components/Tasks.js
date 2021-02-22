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

    return ( 
        <div className="tasks-container">
            {tasks.map((task) => (
                <Task task={task} key={task.id} />
            ))}
        </div>
        
     );
}
 
export default Tasks;