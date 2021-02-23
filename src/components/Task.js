const Task = ({ task, handleDoubleClick, handleDelete }) => {

    return ( 
        <div 
            className={`task  ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => { handleDoubleClick(task.id)}}
        >
            <div className="content">
                <h3> {task.title} </h3>
                <p> {task.date} </p>

            </div>
            <i onClick={() => handleDelete(task.id)} className="fas fa-trash"></i>
        </div>
     );
}
 
export default Task;