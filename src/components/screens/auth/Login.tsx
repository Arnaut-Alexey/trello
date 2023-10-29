import { AuthLayout } from './authLayout';
import { Input } from '../../ui/inputs';
import { Button } from '../../ui/button';

import { ILoginProps } from './interface';

import styles from './style.module.scss';

export const Login = () => {

  const handleSubmit: React.FormEventHandler<HTMLFormElement & ILoginProps> = (e) => {
    e.preventDefault(); 
  }

  return (
    <AuthLayout>
      <section className={styles.sectionBox}>
        <div className="container">
          <div className={styles.sectionBox_inner}>
            <div className={styles.sectionBox__title}>
              <h2>Вход</h2>
            </div>
            <form className={styles.sectionBox__form} onSubmit={handleSubmit}>
              <div className={styles.sectionBox__form_fields}>
                <div className={styles.sectionBox__form_field}>
                  <Input type='email' name="email" placeholder="Email" icon="email" />
                </div>
                <div className={styles.sectionBox__form_field}>
                  <Input type='password' name="password" placeholder="Пароль" icon="password" />
                </div>
              </div>
              <div className={styles.sectionBox__form_actions}>
                <div className={styles.sectionBox__form_action}>
                  <Button>Войти</Button>
                </div>
                <div className={styles.sectionBox__form_action}>
                  <Button type='link' path='/sign-up'>Еще нет аккаунта?</Button>
                </div>
                <div className={styles.sectionBox__form_action}>
                  <Button type='link' path='/reset-password'>Забыли пароль?</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AuthLayout>
  )
}
