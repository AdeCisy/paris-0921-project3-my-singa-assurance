import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/HomepagePresentation.module.scss';
import HomepageImg from '/assets/photoHome.png';

function HomepagePresentation() {
  const navigate = useNavigate();

  const GoOffer = () => {
    navigate('/offer/offer');
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.text}>
        <h2 className={style.title}>
          <mark className={style.hightlight}>&nbsp;Singa, l&apos;assurance&nbsp;</mark>
        </h2>
        <h2 className={style.title}>
          <mark className={style.hightlight}>&nbsp;santé pour vos proches&nbsp;</mark>
        </h2>
        <h2 className={style.titleEnd}>
          <mark className={style.hightlight}> en RDC </mark>
        </h2>

        <p className={style.description}> Nous croyons que l&apos;Afrique mérite d&apos;avoir accès à des soins de qualité.</p>
        <p className={style.description}> Singa permet à la diaspora d&apos;offrir à leurs proches une mutuelle santé simple, solidaire et utile.</p>
        <p className={style.description}> Et tout ça en soutenant des causes qui ont un impact positif sur l&apos;économie locale</p>
        <div className={style.buttons}>
          <button className={style.offers} onClick={GoOffer}>
            Consulter les offres
          </button>
        </div>
      </div>
      <img alt="HomepagePresentationImg" src={HomepageImg} className={style.mainImg}></img>
    </div>
  );
}

export default HomepagePresentation;
