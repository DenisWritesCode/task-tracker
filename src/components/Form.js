import { useState } from 'react';

const Form = ({ addTask }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault(); // No funny page reloads.

        if (!title) {
            alert("Task must have a name");
            return;
        }

        addTask({title, date, reminder}) // Set a new Task.
        
        // We could not use e.reset(); since the input fields are controlled.
        setTitle('');
        setDate('');
        setReminder(false);
        
    }


    return ( 
        <div className="form-container">
            <form onSubmit= { onSubmit } >
                <div className="activity">

                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Activity..." 
                    value={title} onChange={(e) => setTitle(e.target.value)}

                />
                </div>

                <div className="date">

                <label htmlFor="date">Date & Time</label>
                <input type="text" placeholder="Date & Time"
                    value={date} onChange={(e) => setDate(e.target.value)}
                 />
                </div>

                <div className="reminder-check">

                <label htmlFor="reminder">Sound the Alarm </label>
                <input type="checkbox" name="reminder" id=""
                    checked={reminder} value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
                </div>

                <input className="btn" type="submit" value="Add To-Do"/>
            </form>
        </div>
     );
}
 
export default Form;