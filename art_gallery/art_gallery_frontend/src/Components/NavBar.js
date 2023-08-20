import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <nav>
            <Link to="/paintings">
                <h1 className="logo"> View Artwork</h1>
            </Link>
            <button>
                <Link to="/paintings/new">Log a New Painting</Link>
            </button>
        </nav>
    )
}