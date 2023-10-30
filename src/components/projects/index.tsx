import { observer } from 'mobx-react-lite';

import { Project } from './project';

import { modalStore } from '../../store/modalStore';
import { projectsStore } from '../../store/projectsStore';

import styles from './style.module.scss';

export const Projects = observer(() => {

    return (
        <div className={styles.projects}>
            {projectsStore.projects.length > 0 && projectsStore.projects.map((project) => (
                <Project {...project} key={project.id} />
            ))}
            <div className={`${styles.project} ${styles.__add}`} onClick={() => modalStore.openModal('create-project')}>
                +Добавить доску
            </div>
        </div>
    )
})
