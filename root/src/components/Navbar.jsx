import './Navbar.css'; // CSS for styling the nav bar
import { BrowserRouter as Router } from 'react-router-dom'; // route between diff pages


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
            <Router>
            <div className="navbar">
                <ul>
                    <li><a href="#about">intro</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="/Resume_2024 (1).pdf" target="_blank" className="btn">resume</a></li>
                </ul>
            </div>
            </Router>

        </header>

      );
    }

export default Navbar;