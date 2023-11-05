import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Users from "../users/Users";
import User from "../users/User";
import NotFound from "../pages/NotFound";
import HelloWorld from "../pages/HelloWorld";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/hello"} element={<HelloWorld/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/users"} element={<Users/>}/>
            <Route path={"/users/:id"} element={<User/>}/>
            <Route path={"/*"} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;