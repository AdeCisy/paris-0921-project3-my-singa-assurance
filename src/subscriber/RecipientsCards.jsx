import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/RecipientsCards.module.scss';

import Sophie from '/assets/MpandaSophie.png';
import stethoscope from '/assets/stethoscope.png';
import carte from '/assets/carte.png';

function RecipientsCards(recipient) {
  const navigate = useNavigate();

  const GoRecipientDetails = () => {
    navigate('/subscribers/recipient/recipientdetails', { state: recipient });
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.recipientsRecap}>
        <div className={style.nameAndImg}>
          <img src={Sophie} alt="beneficiary portrait" className={style.recipientImg} />
          <div className={style.recipientIdentification}>
            <p>{`${recipient.recipient.first_name} ${recipient.recipient.last_name}`}</p>
          </div>
        </div>
        <div className={style.recipientsCare}>
          <div className={style.number}>4</div> <div className={style.prises}>prises en charge ce mois-ci</div>
        </div>
      </div>
      <div className={style.bandeau}>
        <img alt="icone stethoscope" className={style.stetho} src={stethoscope} />
        <div className={style.recipientsDetails} onClick={GoRecipientDetails}>
          Suivre les prises en charge de vos proches
        </div>
      </div>
      <div className={style.bandeau}>
        <img alt="icone carte" className={style.carte} src={carte} />
        <div className={style.recipientsDetails}>
          <div>Réseau de soins Activa RDC</div> <div className={style.findDoctor}>Trouver le praticien le plus proche de votre bénéficiaire</div>
        </div>
      </div>
    </div>
  );
}

export default RecipientsCards;
