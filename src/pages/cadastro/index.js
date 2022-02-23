import React, { useReducer, useState} from "react";
import {Text, View, TextInput, StyleSheet} from 'react-native'

let Cadastro =({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params: {})
    return(
        <View>
            <Text>Nome</Text>
            <TextInput>
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            </TextInput>
        </View>
    )
}

export default Cadastro;