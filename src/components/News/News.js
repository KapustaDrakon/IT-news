import { Subscribe } from '../Subscribe/Subscribe';
import './News.css';

export function News() {
  return (
    <aside className="news">
      <h2 className="news__title">Популярные новости</h2>
      <ul className="news__content">
        <li className="news__item">
          <p className="news__text">ITAM&SAMDay – самая настоящая удача!</p>
          <span className="news__date">13 дек 2020</span>
        </li>
        <li className="news__item">
          <p className="news__text">
            Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить
            ...
          </p>
          <span className="news__date">10 дек 2020</span>
        </li>
        <li className="news__item">
          <p className="news__text">
            Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?
          </p>
          <span className="news__date">5 дек 2020</span>
        </li>
      </ul>
      <Subscribe />
    </aside>
  );
}
