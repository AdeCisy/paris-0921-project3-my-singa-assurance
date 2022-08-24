import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/TarifCard.module.scss';

function TarifCard({ title, couverture, prix, desc, color }) {
  const navigate = useNavigate();

  const GoOffer = () => {
    navigate('/offer/offer');
  };
  return (
    <div className={style.tarifCardContainer}>
      <div className={style.titleContainer} style={{ backgroundColor: color }}>
        <h1>{title}</h1>
      </div>
      <div className={style.divTarif}>couverture à {couverture}%</div>
      <div className={style.divTarif}> à partir de </div>
      <div className={style.divTarif}>{prix}€</div>
      <div className={style.divTarif}>{desc}</div>
      <button className={style.buttons} onClick={GoOffer}>
        Souscrire
      </button>
    </div>
  );
}

export default TarifCard;
