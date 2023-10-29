import { ModalWrapper } from '..';
import { Button } from '../../ui/button';
import { InputText } from '../../ui/inputs/inputText';

import defaultStyles from '../style.module.scss';
import styles from './style.module.scss';

export const ModalCreateProject = () => {

  return (
    <ModalWrapper name='create-project' closeSize="md">
      <div className={defaultStyles.modal__head}>
        <h2>Создание доски</h2>
      </div>
      <div className={styles.modal__body}>
        <form className={styles.form}>
          <div className={styles.form__fields}>
            <div className={styles.form__field}>
              <InputText name='title' placeholder='Название доски' />
            </div>
          </div>
          <div className={styles.form__actions}>
            <Button>Создать доску</Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  )
}
