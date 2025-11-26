import { TOTAL_POINTS } from '@/constants';
import styles from './Pagination.module.scss';

interface IPaginationProps {
  activeIndex: number;
  handleClick: (i: number) => void;
}

export function Pagination({ activeIndex, handleClick }: IPaginationProps) {
  return (
    <section className={styles.pagination}>
      {Array.from({ length: TOTAL_POINTS }, (_, i) => {
        return (
          <button
            aria-label={`Период ${i + 1}`}
            type="button"
            key={`pagination-${i}`}
            className={`${styles.item} ${i === activeIndex && styles.active}`}
            onClick={() => handleClick(i)}
          ></button>
        );
      })}
    </section>
  );
}
