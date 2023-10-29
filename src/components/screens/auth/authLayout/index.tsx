import React from 'react';

import { Header } from '../../../header';

import { IAuthLayoutProps } from '../interface';

import styles from '../style.module.scss';

export const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className='__site_wrapper'>
            <Header />
            <main className={styles.auth}>
                {children}
            </main>
        </div>
    )
}
