import { Projects } from '../../projects';

import styles from './style.module.scss';

export const Home = () => {
  return (
    <section className={styles.projects}>
        <div className="container">
            <Projects />
        </div>
    </section>
  )
}
