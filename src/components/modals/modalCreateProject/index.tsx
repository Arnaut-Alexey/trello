import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { ModalWrapper } from '..';
import { Button } from '../../ui/button';
import { InputText } from '../../ui/inputs/inputText';

import { projectsStore } from '../../../store/projectsStore';

import { ICreateProjectProps } from '../interface';

import defaultStyles from '../style.module.scss';
import styles from './style.module.scss';

export const ModalCreateProject = observer(() => {
  const [error, setError] = useState('');

  const createProject: React.FormEventHandler<HTMLFormElement & ICreateProjectProps> = (e) => {
    e.preventDefault();

    setError('');

    const form = e.currentTarget;

    projectsStore.createProject(form.title.value, setError);
  }

  useEffect(() => {
    console.log(projectsStore.isLoading);
  }, [projectsStore.isLoading])

  return (
    <ModalWrapper name='create-project' closeSize="md">
      <div className={defaultStyles.modal__head}>
        <h2>Создание доски</h2>
      </div>
      <div className={styles.modal__body}>
        <form className={styles.form} onSubmit={createProject}>
          <div className={styles.form__fields}>
            <div className={styles.form__field}>
              <InputText name='title' placeholder='Название доски' error={error} />
            </div>
          </div>
          <div className={styles.form__actions}>
            <Button isLoading={projectsStore.isLoading}>Создать доску</Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  )
})
