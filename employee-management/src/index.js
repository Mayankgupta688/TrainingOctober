import React from "react";
import ReactDOM from "react-dom";

import { HeaderComponent } from "./components/HeaderComponent";
import { ContentComponent } from "./components/ContentComponent";
import { FooterComponent } from "./components/FooterComponent";

ReactDOM.render((
        <section>
            <div>
                <HeaderComponent></HeaderComponent>
            </div>
            <div>
                <ContentComponent></ContentComponent>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>
        </section>
    ), 
    document.getElementById("root")
);