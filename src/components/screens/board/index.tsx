import ScrollContainer from 'react-indiana-drag-scroll';

import { Boards } from '../../boards';

import styles from './style.module.scss';

export const Board = () => {
  return (
    <section className={styles.boards}>
      <ScrollContainer className={styles.scroll}>
        <div className="container">
          <Boards />
        </div>
      </ScrollContainer>
    </section>
  )
}
