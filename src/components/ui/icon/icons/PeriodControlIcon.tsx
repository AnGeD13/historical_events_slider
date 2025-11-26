import styles from './Icons.module.scss';

export function PeriodControlIcon() {
  return (
    <>
      <svg
        className={styles.periodDesktop}
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.707092 0.707108L6.95709 6.95711L0.707093 13.2071"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
      <svg
        className={styles.periodMobile}
        width="6"
        height="8"
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.707154 0.707093L3.83215 3.83209L0.707155 6.95709"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </>
  );
}
