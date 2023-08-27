import { Link } from "react-router-dom";
import logo from "../logo.png"
import "../CSS/NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <Link to="/paintings">
            <img src={logo} className="logo" alt="logo" /> 

            </Link>
            <div className="logA">
            <button className="NewButton">
                <Link to="/paintings/new">Log a New Painting</Link>
            </button>
            </div>
        </nav>  
    )
}