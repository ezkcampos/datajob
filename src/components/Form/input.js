import React, {useEffect, useRef} from "react";
import { useField } from '@unform/core';

export default function Input({name, ...rest}) {
    const inputRef = useRef(null);
    const { fieldName, registerFiled, defaultValue, error } = useField(name);
    
    useEffect(() => {
        registerFiled({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerFiled]);
    return (
        <input ref={inputRef} defaultValue={defaultValue} {...rest}/>
    );
}