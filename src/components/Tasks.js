import Task from './Task';

const Tasks = ({ tasks, handleDoubleClick, handleDelete }) => {

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