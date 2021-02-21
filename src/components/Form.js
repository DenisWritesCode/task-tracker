const Form = () => {
    return ( 
        <div className="form-container">
            <form>
                <div className="activity">

                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Activity..." />
                </div>

                <div className="date">

                <label htmlFor="date">Date & Time</label>
                <input type="text" placeholder="Date & Time" />
                </div>

                <div className="reminder-check">

                <label htmlFor="reminder">Sound the Alarm </label>
                <input type="checkbox" name="reminder" id=""/>
                </div>

                <input className="btn" type="submit" value="Add To-Do"/>
            </form>
        </div>
     );
}
 
export default Form;