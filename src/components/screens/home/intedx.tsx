import { useEffect } from 'react';
import { Projects } from '../../projects';

import { projectsStore } from '../../../store/projectsStore';

import styles from './style.module.scss';

export const Home = () => {

  useEffect(() => {
    projectsStore.getProjects();
  }, [])

  return (
    <section className={styles.projects}>
      <div className="container">
        <Projects />
      </div>
    </section>
  )
}
