import './ButtonMore.css';
import refresh from '../../assets/images/refresh.svg';

export function ButtonMore() {
  return (
    <button type="button" className="button-more">
      Показать еще 6
      <img src={refresh} alt="refresh" className="button-more__refresh-image" />
    </button>
  );
}
