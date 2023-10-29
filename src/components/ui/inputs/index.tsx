import React from 'react';

import { InputText } from './inputText';
import { InputPassword } from './inputPassword';

import { IInputProps } from './interface';
import { InputEmail } from './inputEmail';

export const Input: React.FC<IInputProps> = (props) => {
  const { type, name, placeholder, error, icon } = props;

  if (type === 'text') { 
    return (
      <InputText placeholder={placeholder} error={error} name={name} icon={icon} />
    )
  } else if (type === 'email') {
    return (
      <InputEmail placeholder={placeholder} error={error} name={name} icon={icon} />
    )
  } else if (type === 'password') {
    return (
      <InputPassword placeholder={placeholder} error={error} name={name} icon={icon} />
    )
  }

}
