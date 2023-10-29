import React from 'react';

import { Header } from '../header';
import { ModalCreateProject } from '../modals/modalCreateProject';
import { ModalEditTask } from '../modals/modalEditTask';

import { ILayoutProps } from './interface'

export const Layout: React.FC<ILayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className='__site_wrapper'>
            <Header />
            <main>
                {children}
            </main>
            <ModalCreateProject />
            <ModalEditTask />
        </div>
    )
}
