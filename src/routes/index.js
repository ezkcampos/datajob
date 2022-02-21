import React from "react";
import {BrowserRouter,Routes} from "react-router-dom"

import Route from './Route';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Pagina404 from '../pages/Pagina404'

const Routess = () =>{
    return(
        <BrowserRouter>
      <Routes>
        <Route component={Home} path= "/" exact isPrivate />
        <Route component={Login} path= "/login"  />
        <Route component={Home} path= "/main" isPrivate />
        <Route component={Pagina404} path= "*" isPrivate />
      </Routes>
    </BrowserRouter>
    )

}

export default Routess; 