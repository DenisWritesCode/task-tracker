const Header = ({ showForm, toggleForm }) => {

    return ( 
        <header>
        <div className="top">
            <h1>Task-Tracker</h1>
            { showForm && <button className="btn" style={{backgroundColor: "red"}}
                    onClick={() => toggleForm()}>
                Close
            </button> }
            { !showForm && <button onClick={() => toggleForm()} className="btn" style={{backgroundColor: "green"}}>Add</button>}
        </div>

        <div className="bottom">
            <p className="header-text">Double click on an element to set a reminder on.</p>
            <p className="header-text">Double click again to remove the reminder.</p>
        </div>
        </header>
     );
}
 
export default Header;