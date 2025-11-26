import styles from './Dates.module.scss';

interface IDatesProps {
  startDate: number;
  endData: number;
}

export function Dates({ startDate, endData }: IDatesProps) {
  return (
    <p className={styles.dates}>
      <time className={styles.first} dateTime={`${startDate}`}>
        {startDate}
      </time>{' '}
      <time className={styles.last} dateTime={`${endData}`}>
        {endData}
      </time>
    </p>
  );
}
