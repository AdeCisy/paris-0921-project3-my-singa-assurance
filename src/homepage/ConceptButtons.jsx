import React from 'react';
import style from './style/ConceptButtons.module.scss';

function ConceptButtons({ icone, title, arg }) {
  return (
    <div className={style.allConceptButton}>
      <div className={style.apparentButton}>
        <img src={icone} alt="icone" />
        <div className={style.title}>
          {title}{' '}
          <span className={style.plus} style={{ color: '#2AD63E' }}>
            +
          </span>
        </div>
      </div>
      <div className={style.arg}>
        <ul className={style.ulConceptBtn}>
          {arg &&
            arg.map((element) => (
              <li key={element} className={style.liConceptBtn}>
                {element}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ConceptButtons;
