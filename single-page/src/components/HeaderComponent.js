import { Link } from "react-router-dom";
export default function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <a style={{"marginRight": "15px"}} href="/">Home</a>
                <a style={{"marginRight": "15px"}} href="/help">Help</a>
                <a style={{"marginRight": "15px"}} href="/about">About</a>
            </nav><br/><br/>
            <nav>
                <Link style={{"marginRight": "15px"}} to="/">Home</Link>
                <Link style={{"marginRight": "15px"}} to="/help">Help</Link>
                <Link style={{"marginRight": "15px"}} to="/about">About</Link>
            </nav>
        </div>
    )
}