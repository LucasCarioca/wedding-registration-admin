import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar";


export default function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes/>
            </div>
        </Router>
    );
}