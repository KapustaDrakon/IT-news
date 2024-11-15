import { useLayoutEffect } from 'react';
import { ButtonMore } from '../ButtonMore/ButtonMore';
import { Pagination } from '../Pagination/Pagination';
import AnimationScroll from '../../AnimationScroll';
import './List.css';

export function List() {
  useLayoutEffect(() => {
    AnimationScroll();
  }, []);

  return (
    <section className="list">
      <div className="list_margin-bottom">
        <article className="list__item list__item-type1 _animation-item _no-hide">
          <span className="list__category list__category_blue">Категория 1</span>
          <h3 className="list__title">Управление ИТ-активами – скучная рутина или творческая задача?</h3>
          <p className="list__text">
            Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
            компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
            проверить, нужен ли он вообще.{' '}
          </p>
          <span className="list__date2">13 дек 2020</span>
        </article>

        <div className="list_flex">
          <article className="list__item list__item-type2 _animation-item _no-hide">
            <span className="list__category list__category_blue">Категория 1</span>
            <h3 className="list__title">Управление ИТ-активами – скучная рутина или творческая задача?</h3>
            <p className="list__text">
              Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
              компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
              проверить, нужен ли он вообще.{' '}
            </p>
            <span className="list__date2">13 дек 2020</span>
          </article>

          <article className="list__item list__item-type3 _animation-item _no-hide">
            <span className="list__category list__category_white">Категория 1</span>
            <h3 className="list__title list__title_white">ITAM&SAMDay – самая настоящая удача!</h3>
            <p className="list__text"></p>
            <span className="list__date">13 дек 2020</span>
          </article>
        </div>

        <div className="list_flex">
          <article className="list__item list__item-type4 _animation-item _no-hide">
            <span className="list__category list__category_white2">Очень длинная категория 2</span>
            <h3 className="list__title list__title_white">
              Управление ИТ-активами – скучная рутина или творческая задача?
            </h3>
            <p className="list__text"></p>
            <span className="list__date">13 дек 2020</span>
          </article>

          <div className="list_flex2">
            <article className="list__item list__item-type5 _animation-item _no-hide">
              <span className="list__category list__category_blue">Категория 1</span>
              <h3 className="list__title">Управление ИТ-активами – скучная рутина или творческая задача?</h3>
              <span className="list__date2">13 дек 2020</span>
            </article>

            <article className="list__item list__item-type5 _animation-item _no-hide">
              <span className="list__category list__category_blue">Категория 1</span>
              <h3 className="list__title">ITAM&SAMDay – самая настоящая удача!</h3>
              <span className="list__date2">13 дек 2020</span>
            </article>
          </div>
        </div>
      </div>

      <ButtonMore />
      <Pagination />
    </section>
  );
}
