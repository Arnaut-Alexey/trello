import React from 'react';
import { observer } from 'mobx-react-lite';

import { IconClose } from '../ui/icon/iconClose';

import { modalStore } from '../../store/modalStore';

import { IModalWrapperProps } from './interface'

import styles from './style.module.scss';

export const ModalWrapper: React.FC<IModalWrapperProps> = observer((props) => {
    const { children, closeSize, name } = props;

    return (
        modalStore.activeModalName === name &&
        <div className={`${styles.modal} ${modalStore.isActive ? styles.__active : ''}`} onClick={() => modalStore.closeModal()}>
            <div className={styles.modal_inner} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    <div className={styles.modal__close} onClick={() => modalStore.closeModal()}>
                        <IconClose size={closeSize} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
})
