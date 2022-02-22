import React, {useContext} from 'react';
import {Route as RectDOMRoute} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {UsuarioContext} from '../contexts/user';

function Route({
    isPrivate = false, component: Component, ...rest
}) {

    const { user, loading } = useContext(UsuarioContext);

    const history = useHistory();

    if (loading) {
        return (
            <div>
                <p>...carregando...</p>
            </div>
        );
    }

    //const user = null
    if (!(isPrivate === !!user)) {
        history.push(isPrivate ? '/login' : '/main');
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