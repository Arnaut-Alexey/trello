import { modalStore } from '../../store/modalStore';
import { Project } from './project';

import styles from './style.module.scss';

const projects = [
    {
        id: '0',
        title: 'Lorem, ipsum.',
        color: '2C92F0'
    },
    {
        id: '1',
        title: 'Lorem ipsum dolor sit amet.',
        color: 'FB8E2A'
    },
    {
        id: '2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, consequatur sint! Eum aliquam consequatur atque nam ipsum eveniet inventore omnis dolore, eius repudiandae quibusdam beatae maiores? Ratione laborum ipsam provident reprehenderit voluptates, impedit, eius at cupiditate ut similique in quae ex magnam quisquam, ipsum commodi vel nesciunt dolorem dignissimos molestias.',
        color: ''
    }
]

export const Projects = () => {
    return (
        <div className={styles.projects}>
            {projects.length > 0 && projects.map((project) => (
                <Project {...project} key={project.id} />
            ))}
            <div className={`${styles.project} ${styles.__add}`} onClick={() => modalStore.openModal('create-project')}>
                +Добавить доску
            </div>
        </div>
    )
}
