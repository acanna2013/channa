import './Navbar.css'; // CSS for styling the nav bar

/* create the nav bar for website, the top part */
const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-14">
            <div className="name">
                anna chen
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#about">about me</a></li>
                    <li><a href="#experiences">work experiences</a></li>
                    <li><a href="#projects">outside projects</a></li>
                    <li><a href="#contact">contact me</a></li>
                    <li><a href="#resume">resume</a></li>
                </ul>
            </div>

        </header>

      );
    }

export default Navbar;