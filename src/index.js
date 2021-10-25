import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from "react-router-dom";
import PersonalData from "./components/pages/PersonalData/PersonalData";
import Statistics from "./components/pages/Statistics/Statistics";
import Symptoms from "./components/pages/Symptoms/Symptoms";
import Header from "./components/UI/Header/Header";


const Catia = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path = "/symptoms" component = {Symptoms}/>
            <Route exact path = "/personalinfo" component = {PersonalData}/>
            <Route exact path = "/statistics" component = {Statistics}/>
        </BrowserRouter>
    )
}


ReactDOM.render(<Catia />, document.getElementById('root'));

