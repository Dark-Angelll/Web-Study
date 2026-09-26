import { BoardHeader } from "./components/BoardHeader/BoardHeader";
import { BoardColumn } from "./components/BoardColumn/BoardColumn";
import { NewCardForm } from "./components/NewCardForm/NewCardForm";
import type { Card } from "./types/card";
import styles from "./App.module.css";

const cards: Card[] = [
  {
    id: "1",
    title: "Card 1",
    isDone: false,
    isUrgent: true,
  },
  {
    id: "2",
    title: "Card 2",
    isDone: true,
    isUrgent: true,
  },
  {
    id: "3",
    title: "Card 3",
    isDone: false,
    isUrgent: false,
  },
  {
    id: "4",
    title: "Card 4",
    isDone: false,
    isUrgent: false,
  }
];

function App() {
  return (
    <div className={styles.app}>
      <BoardHeader />
      <main className={styles.board}>
        <NewCardForm />
        <div className={styles.columns}>
          <BoardColumn cards={cards}/>
        </div>
      </main>
    </div>
  );
}

export default App;
