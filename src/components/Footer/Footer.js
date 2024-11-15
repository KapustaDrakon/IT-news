import { Logo } from '../Logo/Logo';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <nav className="footer__nav">
        <ul className="footer__ul-buttons">
          <li className="footer__button-container">
            <a href="о нас" type="button" className="footer__button">
              О нас
            </a>
          </li>
          <li className="footer__button-container">
            <a href="галерея" type="button" className="footer__button">
              Галерея
            </a>
          </li>
          <li className="footer__button-container">
            <a href="новости" type="button" className="footer__button">
              Новости
            </a>
          </li>
          <li className="footer__button-container">
            <a href="контакты" type="button" className="footer__button">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <span className="footer__text">ООО “Организация” 2020. Все права защищены</span>
    </footer>
  );
}
