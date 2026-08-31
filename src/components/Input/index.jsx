import React from 'react';
import { Controller } from 'react-hook-form';

import { InputContainer, IconContainer, InputText } from './style';

const Input = ({ leftIcon, name, ...rest }) => {
    return (
        <InputContainer>
            { leftIcon ? (<IconContainer>{ leftIcon }</IconContainer>) : null }
            <Controller 
                nome={ name }
                control={ control }
                rules={{ required: true }}
                render={ ({ field }) => <InputText { ...field } {...rest} /> }
            />
        </InputContainer>
    )    
}

export { Input };