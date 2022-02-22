import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import RouteRaiz from './Route';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Pagina404 from '../pages/Pagina404'

const RoutesApp = () =>{
    return(
    <BrowserRouter>
      <Routes>
        <Route path= "/" exact isPrivate ={<Home />} />
        <Route path= "/login" t={<Login />} />
        <Route path= "/main" isPrivatt={<Home />} />
        <Route path= "*" isPrivate={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
    )

}

export default RoutesApp; 