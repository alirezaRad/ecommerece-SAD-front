import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './theme.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
// https://blush.design/api/download?shareUri=BvDQSy9Zf0-QTZE1&c=Hair_0%7E910f30-0.6%7E2b121a_Outfit_0%7Eff92a2-0.6%7E2b121a_Skin_0%7Ef8bc9a-0.6%7Ef8bc9a&w=800&h=800&fm=png