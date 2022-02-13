import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";
import {HashRouter} from "react-router-dom";

WebFont.load({
    google: {
        families: ['Poppins', "Spartan:500", "Inter:400"]
    }
});
ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
