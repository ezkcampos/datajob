import React from "react";
//import {Text, View, TextInput, StyleSheet} from 'react-native'
import { Form } from '@unform/web';
import Input from "../../components/Form/input";
import '../../App.css';


function Cadastro() {
    function handleSubmit(data){
        console.log(data);
    }
    return(
        <div className="Cadastro">
            <h1>Ola Mundo</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="Nome" />
                <Input name="CPF" />
                <Input name="Cargo" />
                <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}

export default Cadastro;