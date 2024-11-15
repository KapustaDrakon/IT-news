import { List } from '../List/List';
import { News } from '../News/News';
import './Main.css';

export function Main() {
  return (
    <main className="main">
      <List />
      <News />
    </main>
  );
}
