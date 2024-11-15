import './Pagination.css';
import next from '../../assets/images/next.svg';

export function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__pages-container">
        <a href="1" className="pagination__page pagination__page_active">
          1
        </a>
        <a href="2" className="pagination__page">
          2
        </a>
        <a href="3" className="pagination__page">
          3
        </a>
        <a href="4" className="pagination__page">
          4
        </a>
        <span className="pagination__ellipsis">...</span>
        <a href="10" className="pagination__page">
          10
        </a>
      </div>

      <button type="button" className="pagination__button">
        Следующая
        <img src={next} alt="следующая" className="pagination__next-image" />
      </button>
    </div>
  );
}
