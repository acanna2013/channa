import './Navbar.css'; // CSS for styling the nav bar

/* create the nav bar for website, the top part */
const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-14">
            <div className="name">
                anna chen
                <br/>
                <p>
                    software engineer,
                    <br/> data scientist.
                </p>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#about">intro</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#resume">resume</a></li>
                </ul>
            </div>

        </header>

      );
    }

export default Navbar;