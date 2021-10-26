import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";

export default function App() {
    return (
        <div>
            <HeaderComponent></HeaderComponent><hr/>
            <MainComponent></MainComponent><hr/>
            <FooterComponent></FooterComponent><hr/>
        </div>
    )
}