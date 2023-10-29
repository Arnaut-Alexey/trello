import { Link } from 'react-router-dom';

import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_inner}>
          <Link className={styles.logo} to='/'>
            <h2>Trello</h2>
          </Link>
        </div>
      </div>
    </header>
  )
}
