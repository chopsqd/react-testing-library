import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./components/users/User";
import Users from "./components/users/Users";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
