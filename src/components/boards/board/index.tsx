import React from 'react';

import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { IconClose } from '../../ui/icon/iconClose';
import { Tasks } from '../../tasks';

import { IBoardProps } from '../interface';

import styles from '../style.module.scss';

export const Board: React.FC<IBoardProps> = (props) => {
    const { id, title, tasks, isVisible, setIsVisible } = props;

    const editBoardTitle: React.FormEventHandler<HTMLFormElement> = (e) => {
        const field = e.currentTarget;

        field.blur();
    }

    return (
        <div className={styles.board} id={id}>
            <div className={styles.board_container}>
                <div className={styles.board__head}>
                    <form className={styles.board__head_form}>
                        <Textarea 
                            name="title" 
                            rows="auto" 
                            defaultValue={title} 
                            size='sm'
                            variables='secondary' 
                            onSubmit={editBoardTitle}
                        />
                    </form>
                </div>
                {tasks !== undefined &&
                    <div className={styles.board__body}>
                        <Tasks tasks={tasks} />
                    </div>
                }
                <div className={`${styles.board__footer} ${isVisible === id ? styles.__active : ''}`}>
                    <div
                        className={`${styles.btn} p1`}
                        onClick={() => setIsVisible(id)}
                    >
                        + Добавить карточку
                    </div>
                    <form className={styles.form}>
                        <div className={styles.form__fields}>
                            <Textarea name='title' rows={3} placeholder='Название задачи' size='sm' />
                        </div>
                        <div className={styles.form__actions}>
                            <div className={styles.form__action}>
                                <Button size='sm'>Добавить карточку</Button>
                            </div>
                            <div
                                className={styles.form__action}
                                onClick={() => setIsVisible('')}
                            >
                                <IconClose size='md' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
