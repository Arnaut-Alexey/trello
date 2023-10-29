import React, { useState } from 'react';

import { IInputTextProps } from '../interface';

import defaultStyles from '../style.module.scss';
import styles from './style.module.scss';

export const InputText: React.FC<IInputTextProps> = (props) => {
  const { name, placeholder, error, icon } = props;
  const [value, setValue] = useState('');

  return (
    <div className={`${defaultStyles.field} ${styles.field} ${error ? defaultStyles.__error : ''} ${icon ? defaultStyles.__icon : ''}`}>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      {error &&
        <p className={defaultStyles.filed__error}>{error}</p>
      }
    </div>
  )
}
