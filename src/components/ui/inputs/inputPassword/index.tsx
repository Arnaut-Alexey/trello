import React, { useState } from 'react';

import { Icon } from '../../icon';

import { IInputPasswordProps } from '../interface';

import defaultStyles from '../style.module.scss';
import styles from './style.module.scss';

export const InputPassword: React.FC<IInputPasswordProps> = (props) => {
    const { placeholder, name, error, icon } = props;
    const [value, setValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={`${defaultStyles.field} ${styles.field} ${error ? defaultStyles.__error : ''} ${icon ? defaultStyles.__icon : ''} ${isVisible ? styles.__visible : ''}`}>
            {icon === 'password' &&
                <div className={defaultStyles.field__icon}>
                    <Icon name={icon} />
                </div>
            }
            <input 
                type={isVisible ? 'text' : 'password'} 
                name={name} 
                placeholder={placeholder} 
                onChange={e => setValue(e.target.value)} 
                value={value}
            />

            <div className={defaultStyles.field__icons} onClick={() => setIsVisible(!isVisible)}>
                <div className={`${defaultStyles.field__icon}`}>
                    <Icon name="view_off" />
                </div>
                <div className={`${defaultStyles.field__icon}`}>
                    <Icon name="view" />
                </div>
            </div>
            {error &&
                <p className={defaultStyles.filed__error}>{error}</p>
            }
        </div>
    )
}
