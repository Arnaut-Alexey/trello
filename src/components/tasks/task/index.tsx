import React from 'react';

import { modalStore } from '../../../store/modalStore';

import { ITaskProps } from '../interface';

import styles from '../style.module.scss';
import { editTaskStore } from '../../../store/editTaskStore';

export const Task: React.FC<ITaskProps> = (props) => {
    const { id, title } = props;

    console.log(id);

    const editTask = () => {
        modalStore.openModal('edit-task');

        editTaskStore.editTask(title);
    }

    return (
        <div className={styles.task} onClick={editTask}>
            <div className={styles.task__name}>
                {title}
            </div> 
        </div>
    )
}
