import { AuthLayout } from './authLayout';
import { Input } from '../../ui/inputs';
import { Button } from '../../ui/button';

import { IResetPasswordProps } from './interface';

import styles from './style.module.scss';

export const ResetPassword = () => {

  const handleSubmit: React.FormEventHandler<HTMLFormElement & IResetPasswordProps> = (e) => {
    e.preventDefault();
  }

  return (
    <AuthLayout>
      <section className={styles.sectionBox}>
        <div className="container">
          <div className={styles.sectionBox_inner}>
            <div className={styles.sectionBox__title}>
              <h2>Восстановление пароля</h2>
            </div>
            <form className={styles.sectionBox__form} onSubmit={handleSubmit}>
              <div className={styles.sectionBox__form_fields}>
                <div className={styles.sectionBox__form_field}>
                  <Input type='email' name="email" placeholder="Email" icon="email" />
                </div>
              </div>
              <div className={styles.sectionBox__form_actions}>
                <div className={styles.sectionBox__form_action}>
                  <Button>Запросить код</Button>
                </div>
                <div className={styles.sectionBox__form_action}>
                  <Button type='link' path='/'>Вход</Button>
                </div>
                <div className={styles.sectionBox__form_action}>
                  <Button type='link' path='/sign-up'>Регистрация</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AuthLayout>
  )
}
