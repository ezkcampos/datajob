import React from "react";
import {BrowserRouter, Switch} from "react-router-dom"
import Route from './Route';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Pagina404 from '../pages/Pagina404'
import Cadastro from "../pages/cadastro";
import Forgotpassword from "../pages/forgot";

const Routes = () =>{
    return(
    <BrowserRouter>
      <Switch>
        <Route  component={Home} path= "/" exact isPrivate />
        <Route  component={Login} path= "/login" />
        <Route  component={Forgotpassword} path= "/forgot" />
        <Route  component={Home} path= "/main" isPrivate />
        <Route  component={Cadastro} path= "/cadastro" exact isPrivate />
        <Route  component={Pagina404} path= "*"  />
      </Switch>
    </BrowserRouter>
    )

}

export default Routes; 