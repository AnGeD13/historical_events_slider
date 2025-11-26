import { Icon } from '../ui/icon';
import styles from './PeriodController.module.scss';
import data from '@/data.json';

interface IPeriodControllerProps {
  currentIndex: number;
  changePeriod: (i: number) => void;
}

export function PeriodController({
  currentIndex,
  changePeriod,
}: IPeriodControllerProps) {
  return (
    <section className={styles.wrapper}>
      <p className={styles.numbers}>
        <span>0{currentIndex + 1}</span>/<span>0{data.length}</span>
      </p>
      <div className={styles.btns}>
        <button
          type="button"
          aria-label="Перейти к предыдущему периоду"
          disabled={currentIndex === 0}
          onClick={() => changePeriod(currentIndex - 1)}
          className={`${styles.btn} ${styles.left}`}
        >
          <Icon name="period" />
        </button>
        <button
          type="button"
          aria-label="Перейти к следующему периоду"
          disabled={currentIndex === data.length - 1}
          onClick={() => changePeriod(currentIndex + 1)}
          className={styles.btn}
        >
          <Icon name="period" />
        </button>
      </div>
    </section>
  );
}
