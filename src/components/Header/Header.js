import { useState } from 'react';
import './Header.css';
import tel from '../../assets/images/Telephone.svg';
import { Logo } from '../Logo/Logo';

export function Header() {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    if (show) {
      document.querySelector('.header__nav-show').style.display = 'none';
      setShow(false);
    } else {
      document.querySelector('.header__nav-show').style.display = 'block';
      setShow(true);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__nav">
          <ul className="header__ul-buttons">
            <li className="header__button-container">
              <a href="главная" type="button" className="header__button header__button-active">
                Главная
              </a>
            </li>
            <li className="header__button-container">
              <a href="о нас" type="button" className="header__button">
                О нас
              </a>
            </li>
            <li className="header__button-container">
              <a href="контакты" type="button" className="header__button">
                Контакты
              </a>
            </li>
            <li className="header__button-container">
              <a href="поиск" type="button" className="header__button">
                Поиск
              </a>
            </li>
            <li className="header__button-container">
              <a href="телефон" type="button" className="header__button-tel">
                <img src={tel} alt="telephone" className="header__tel-image" />
                +7 (987) 887-87
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__show">
          <button type="button" className="header__show-menu" onClick={showMenu} />
          <nav className="header__nav-show">
            <ul className="header__ul-buttons-show">
              <li className="header__button-container">
                <a href="главная" type="button" className="header__button header__button-active">
                  Главная
                </a>
              </li>
              <li className="header__button-container">
                <a href="о нас" type="button" className="header__button">
                  О нас
                </a>
              </li>
              <li className="header__button-container">
                <a href="контакты" type="button" className="header__button">
                  Контакты
                </a>
              </li>
              <li className="header__button-container">
                <a href="поиск" type="button" className="header__button">
                  Поиск
                </a>
              </li>
              <li className="header__button-container">
                <a href="телефон" type="button" className="header__button-tel">
                  <img src={tel} alt="telephone" className="header__tel-image" />
                  +7 (987) 887-87
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__main-image" />
    </header>
  );
}
