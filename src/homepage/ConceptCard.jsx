import React from 'react';
import style from './style/ConceptCard.module.scss';

function ConceptCard({ title, src, desc }) {
  return (
    <div className={style.conceptCardContainer}>
      <div className={style.conceptCardContainerTitle}>{title}</div>
      <div className={style.cardDesc}>
        <div>
          <img className="CardImage" src={src} alt={title} />
        </div>
        <div className="CardDescription">{desc}</div>
      </div>
    </div>
  );
}

export default ConceptCard;
