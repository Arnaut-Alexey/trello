import React from 'react';

import { IProjectProps } from '../interface';

import styles from '../style.module.scss';
import { Link } from 'react-router-dom';

export const Project:React.FC<IProjectProps> = (props) => {
    const { id, title, color } = props;
    
    return (
        <Link 
            className={styles.project} style={{ backgroundColor: `#${color}` }} 
            to={`/${id}/${title.replace(/ /g,'')}`}
            >
            <p className={styles.project__name}>
                {title}
            </p>
        </Link>
    )
}
