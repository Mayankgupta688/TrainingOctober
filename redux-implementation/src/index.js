import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers/index";

import AppComponent from "./components/AppComponent";

var appStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={appStore}>
        <AppComponent></AppComponent>
    </Provider>
), document.getElementById("root"))