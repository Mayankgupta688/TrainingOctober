import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent></HeaderComponent><hr/>
                <MainComponent></MainComponent><hr/>
                <FooterComponent></FooterComponent><hr/>
            </BrowserRouter>
        </div>
    )
}