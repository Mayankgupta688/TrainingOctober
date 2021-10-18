import { PassingProps } from "../components/PassingProps";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { ContentComponent } from "../components/ContentComponent";

var userName = "TechnoFunnel Company";
var userAge = "299";

export function App() {
    return (
        <div>
            <HeaderComponent ></HeaderComponent>
            <PassingProps userName="Anshul Gupta" userAge="33"></PassingProps>
            <PassingProps userName="Mayank Gupta" userAge="31"></PassingProps>
            <PassingProps userName="Meha Gupta" userAge="28"></PassingProps>
            <PassingProps userName={userName} userAge={userAge}></PassingProps>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}