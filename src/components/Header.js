const Header = () => {
    return ( 
        <header>
        <div className="top">
            <h1>Task-Tracker</h1>
            <button className="btn">Add</button>
        </div>

        <div className="bottom">
            <p className="header-text">Double click on an element to set a reminder on.</p>
            <p className="header-text">Double click again to remove the reminder.</p>
        </div>
        </header>
     );
}
 
export default Header;