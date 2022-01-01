import React from 'react';

import style from './style/HomepagePresentation.module.scss';
import HomepagePresentationImg from '../assets/HomepagePresentationImg.png';

function HomepagePresentation() {
  return (
    <div className={style.mainContainer}>
      <div className={style.text}>
        <h2 className={style.title}>
          <mark className={style.hightlight}>{''} Singa, l&apos;assurance </mark>
        </h2>
        <h2 className={style.title}>
          <mark className={style.hightlight}> santé pour vos proches </mark>
        </h2>
        <h2 className={style.titleEnd}>
          <mark className={style.hightlight}> en RDC </mark>
        </h2>

        <p className={style.description}> Nous croyons que l&apos;Afrique mérite d&apos;avoir accès à des soins de qualité.</p>
        <p className={style.description}> Singa permet à la diaspora d&apos;offrir à leurs proches une mutuelle santé simple, solidaire et utile</p>
        <p className={style.description}> Et tout ça en soutenant des causes qui ont un impact positif sur l&apos;économie locale</p>
        <div className={style.buttons}>
          <button className={style.offers}>Consulter les offres</button>
        </div>
      </div>
      <img alt="HomepagePresentationImg" src={HomepagePresentationImg} className={style.mainImg}></img>
    </div>
  );
}

export default HomepagePresentation;
