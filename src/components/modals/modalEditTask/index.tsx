import { observer } from 'mobx-react-lite';

import { ModalWrapper } from '..';
import { Textarea } from '../../ui/textarea';

import { editTaskStore } from '../../../store/editTaskStore';

import styles from './style.module.scss';

export const ModalEditTask = observer(() => {

    return (
        <ModalWrapper closeSize='md' name='edit-task'>
            <div className={styles.modal__head}>
                <form className={styles.modal__head_form}>
                    <Textarea 
                        name='title' 
                        rows="auto" 
                        defaultValue={editTaskStore.currTask.title} 
                        size='sm'
                        variables='secondary'
                    />
                </form>
            </div>
        </ModalWrapper>
    )
})
