import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="Home">
            <div>
                <h1>This is a Game Catalog App</h1>
                <h4>View a list of the most popular <Link to="/paintings">paintings</Link></h4>
            </div>
        </div> 
    );
}