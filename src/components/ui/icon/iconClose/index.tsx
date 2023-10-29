import React from 'react';

import { iIconCloseProps } from './interface';

import styles from './style.module.scss';


export const IconClose: React.FC<iIconCloseProps> = (props) => {
    const { variable = 'dark', size = 'sm' } = props;

    return (
        <div className={`${styles.close} ${variable === 'dark' ? styles.__dark : styles.__light} ${size === 'sm' ? styles.__sm : styles.__md}`}>
            <span></span>
            <span></span>
        </div>
    )
}
