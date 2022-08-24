import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import style from './style/SubscriberOneRecipient.module.scss';
import Sophie from '/assets/MpandaSophie.png';

function SubscriberOneRecipient() {
  const location = useLocation();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    location && (
      <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <ArrowBackIosIcon onClick={goBack} />
          <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <div className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailBreak}>
            <p className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailText}>
              {`${location.state.recipient.first_name} ${location.state.recipient.last_name}`}
            </p>
          </div>
        </div>
        <div className={style.mainCoordinatesContainer}>
          <div className={style.coordinates}>
            <p className={style.coordinatesWord}>Coordonnées</p>
            <p className={style.clientId}>Référence bénéficiaire : {location.state.recipient.recipient_id}</p>
          </div>
          <div className={style.recipientContainer}>
            <div className={style.recipient}>
              <p style={{ fontSize: '13px' }}> Titulaire</p>
              <div className={style.name}>
                <p> {location.state.recipient.first_name} </p>
                <p className={style.lastName}> {location.state.recipient.last_name} </p>
              </div>
            </div>
            <p className={style.modify}>Modifier</p>
          </div>
          <div className={style.recipientContainer2}>
            <div className={style.recipient}>
              <p style={{ fontSize: '13px' }}> Numéro de téléphone</p>
              <div className={style.name}>
                <p className={style.lastName}> {location.state.recipient.phone_number} </p>
              </div>
            </div>
            <p className={style.modify}>Modifier</p>
          </div>
          <div className={style.recipientContainer3}>
            <div className={style.recipient}>
              <p style={{ fontSize: '13px' }}> Adresse </p>
              <div className={style.name}>
                <p className={style.lastName}> {location.state.recipient.address} </p>
              </div>
            </div>
            <p className={style.modify}>Modifier</p>
          </div>
        </div>
      </div>
    )
  );
}

export default SubscriberOneRecipient;
