import { useState } from 'react';

import { Board } from './board';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { IconClose } from '../ui/icon/iconClose';

import { ICreateBoardProps } from './interface';

import styles from './style.module.scss';

const boards = [
    {
        id: '0',
        title: 'title 1',
        tasks: [
            {
                id: '0',
                title: 'Title 1'
            },
            {
                id: '1',
                title: 'Title 2'
            },
        ]
    },
    {
        id: '1',
        title: 'titlt 2',
        tasks: [
            {
                id: '0',
                title: 'Title 1'
            },
        ]
    },
    {
        id: '2',
        title: 'titlt 3',
    },
]

export const Boards = () => {
    const [isVisible, setIsVisible] = useState('');

    const createBoard: React.FormEventHandler<HTMLFormElement & ICreateBoardProps> = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.boards}>
            {boards.length &&
                boards.map((board) => (
                    <Board {...board} key={board.id} isVisible={isVisible} setIsVisible={setIsVisible} />
                ))
            }
            <div className={`${styles.board} ${styles.__add}`}>
                <div className={styles.board_container}>
                    <div className={`${styles.board__footer} ${isVisible === 'create-project' ? styles.__active : ''}`}>
                        <div
                            className={`${styles.btn} p1`}
                            onClick={() => setIsVisible('create-project')}
                        >
                            + Добавить доску
                        </div>
                        <form className={styles.form} onSubmit={createBoard}>
                            <div className={styles.form__fields}>
                                <Textarea name='title' rows={3} placeholder='Название задачи' size='sm' />
                            </div>
                            <div className={styles.form__actions}>
                                <div className={styles.form__action}>
                                    <Button size='sm'>Добавить доску</Button>
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
        </div>
    )
}
