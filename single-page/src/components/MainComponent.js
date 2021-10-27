import { Route, Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import HelpComponent from "../components/HelpComponent";
import AboutComponent from "../components/AboutComponent";

export default function MainComponent() {
    return (
        <div>
            <h1>This is Main Component</h1>

                <nav>
                    <Link style={{"marginRight": "15px"}} to="/">Home</Link>
                    <Link style={{"marginRight": "15px"}} to="/help">Help</Link>
                    <Link style={{"marginRight": "15px"}} to="/about">About</Link>
                </nav>

                <Route exact path="/" component={HomeComponent}></Route>
                <Route exact path="/help" component={HelpComponent}></Route>
                <Route exact path="/about" component={AboutComponent}></Route>
       
        </div>
    )
}