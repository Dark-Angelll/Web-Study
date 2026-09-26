import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardColumn.module.css";

type BoardColumnProps = {
  cards: Card[];
};

export function BoardColumn({ cards }: BoardColumnProps) {
  return (
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
        {cards.map((card) => (
          <BoardCard 
          key={card.id} 
          title={card.title}
          isDone={card.isDone}
          isUrgent={card.isUrgent} />
        ))}
      </div>
    </section>
  );
}
