import React, {useContext} from 'react';
import {Route as RectDOMRoute, useNavigate} from 'react-router-dom';
import {UsuarioContext} from '../contexts/user';

function Route({
    isPrivate = false, component: Component, ...rest
}) {

    const { user, loading } = useContext(UsuarioContext);

    const navigate = useNavigate();

    if (loading) {
        return (
            <div>
                <p>...carregando...</p>
            </div>
        );
    }

    //const user = null
    if (!(isPrivate === !!user)) {
        navigate.push(isPrivate ? '/login' : '/main');
    }

    return (
        <RectDOMRoute {...rest}
            render={(props) => {
                return (
                    <Component {...props} />
                );
            } } />
    );
}

export default Route;