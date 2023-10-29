import React, { useState } from 'react';

import { Icon } from '../../icon';

import { IInputEmailProps } from '../interface';

import defaultStyles from '../style.module.scss';
import styles from './style.module.scss';

export const InputEmail: React.FC<IInputEmailProps> = (props) => {
  const { name, placeholder, error, icon } = props;
  const [value, setValue] = useState('');

  return (
    <div className={`${defaultStyles.field} ${styles.field} ${error ? defaultStyles.__error : ''} ${icon ? defaultStyles.__icon : ''}`}>
      {icon === 'email' &&
        <div className={defaultStyles.field__icon}>
          <Icon name={icon} />
        </div>
      }
      <input
        name={name}
        type="email"
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
