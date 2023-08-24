import { Link } from "react-router-dom";
import "../CSS/Home.css"
// import background from "../background.png"


export default function Home() {
    
    return (
        <div className="Home">
            {/* <img src={background} className="background" alt="background" /> */}
            <div>
                <h1 className="welcome">Welcome To The Art Gallery </h1>
                <h4 className="view">View a list of the most popular <Link to="/paintings">paintings</Link></h4>
            </div>
            
        </div> 
    );
}