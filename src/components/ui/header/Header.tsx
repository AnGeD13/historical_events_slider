import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Исторические
        <br />
        даты
      </h1>
    </header>
  );
}
