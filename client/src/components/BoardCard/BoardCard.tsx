import styles from "./BoardCard.module.css";

type BoardCardProps = {
  title: string;
  isDone: boolean;
  isUrgent: boolean;
};

export function BoardCard({ title, isDone }: BoardCardProps) {
  return ( <div className={`${styles.card} ${isDone ? styles.done : ""}`}>{title}</div>);
}
