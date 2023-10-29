import React from 'react';

import { Task } from './task';

import { ITasksProps } from './interface';

import styles from './style.module.scss';

export const Tasks: React.FC<ITasksProps> = (props) => {
    const { tasks } = props;

    return (
        <div className={styles.tasks}>
            {tasks.length > 0 &&
                tasks.map((task) => (
                    <Task {...task} key={task.id} />
                ))
            }
        </div>
    )
}
