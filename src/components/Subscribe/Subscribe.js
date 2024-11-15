import './Subscribe.css';
import row from '../../assets/images/subscribe-row.svg';

export function Subscribe() {
  return (
    <form className="subscribe__form" id="subscribe-form">
      <span className="subscribe__title">Подписка на рассылку</span>
      <div className="subscribe__inputs">
        <input
          type="email"
          className="subscribe__input-email"
          id="subscribe-form-input-email"
          placeholder="Email@gmail.com"
        />
        <button type="submit" className="subscribe__input-submit">
          Подписаться
          <img src={row} alt="стрелка" className="subscribe__row" />
        </button>
      </div>
    </form>
  );
}
