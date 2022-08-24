import React from 'react';

import ActionSolide from '/assets/ActionSolide.png';
import Camembert from '/assets/Camembert.png';

import style from './style/Actus.module.scss';

function Actus() {
  const Emoji = (props) => (
    <span className={style.emojiHandright} role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  return (
    <div className={style.mainActusPageContainer}>
      <div className={style.textActus}>
        <h2 className={style.actustitle}>Les Actions Solidaires de Singa</h2>
        <div className={style.actustitleMain}>
          <p className={style.actusdescription}>Nous avons conçu Singa pour faire ressortir </p>
          <p className={style.actusdescription}>le meilleur de tous, tout en ayant un impact positif </p>
          <p className={style.actusdescription}>sur la société.</p>
        </div>
        <div className={style.imageActionMain}>
          <img alt="ActionSolideimg" src={ActionSolide} className={style.actionImg} />
        </div>
        <div className={style.engagementContainer}>
          <h2 className={style.engagement}>Notre engagement social</h2>
          <p className={style.engagementdescription}>
            Singa prélève des frais fixes, et considére que le reste de votre cotisation est le vôtre, et non le nôtre. Nous utilisons vos cotisations
            pour rembourser vos frais de santé, et redistribuons l&apos;argent qui reste à des causes qui vous tiennent à cœur.
          </p>
        </div>
        <div className={style.explications}>
          <h2 className={style.explicationstitle}>Explications:</h2>
          <ul className={style.explicationsTable}>
            <li className={style.explicationsTableli}>
              {' '}
              <Emoji label="backHand Index pointing left" symbol="👉" /> Vous obtenez une assurance de qualité, tout en soutenant une cause qui vous
              tient à cœur.
            </li>
            <li className={style.explicationsTableli}>
              {' '}
              <Emoji label="backHand Index pointing left" symbol="👉" /> Il n&apos;y a pas de conflits d&apos;intérêts entre vous et nous, car notre
              rémunération est toujours la même.
            </li>
            <li className={style.explicationsTableli}>
              <Emoji label="backHand Index pointing left" symbol="👉" /> L&apos;engagement social est au cœur de notre business model. C&apos;est
              pourquoi Lorem Ipsum est une société d&apos;intérêt public et certifiée B-Corp.
            </li>
          </ul>
        </div>
        <div className={style.camembertTitle}>
          <h2 className={style.camembertTitleText}>Voici votre cotisation.</h2>
          <h2 className={style.camembertTitleText}>Vous la payez mensuellement.</h2>
        </div>
        <div className={style.camembert}>
          <div className={style.camembertDescription}>
            <div className={style.leftDescription}>
              <h3>70% de votre cotisation</h3>
              <p>est placé dans le pot commun pour tous les assurés. Cet argent sert à vous rembourser.</p>
            </div>
            <div className={style.imageCamembert}>
              <img alt="Camembertimg" src={Camembert} className={style.camembertImg} />
            </div>
            <div className={style.rightDescription}>
              <div className={style.upDescription}>
                <h3>30% de votre cotisation</h3>
                <p>est dédié aux frais de gestion de Singa : service client, gestion de frais de santé, innovation, etc.</p>
              </div>
              <div className={style.downDescription}>
                <h3>S&apos;il reste de l&apos;argent en fin d&apos;année,</h3>
                <p>il est reversé à l&apos;association de votre choix. Il ne vient pas accroitre nos profits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Actus;
