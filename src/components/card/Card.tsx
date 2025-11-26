import styles from './Card.module.scss';

interface ICardProps {
  date: number;
  title: string;
}

export function Card({ date, title }: ICardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{date}</h2>
      <p className={styles.text}>{title}</p>
    </article>
  );
}
