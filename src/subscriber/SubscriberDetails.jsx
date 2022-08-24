import React, { useContext, useEffect } from 'react';

import { getSubscriberInfo } from '../services/axios.service';
import SubscriberInfoContext from '../context/SubscriberInfoContext';
import style from './style/SubscriberDetails.module.scss';
import Sophie from '/assets/MpandaSophie.png';

function SubscriberDetails() {
  const { decodedToken, subscriberInfo, setSubscriberInfo } = useContext(SubscriberInfoContext);

  useEffect(async () => {
    const id = decodedToken.id;
    const getData = async () => {
      const res = await getSubscriberInfo(id);
      return res.data;
    };
    const result = await getData();

    setSubscriberInfo(result);
  }, []);

  return (
    <div className={style.mainContainerSubscriberDetails}>
      <div className={style.title}>Mon Profil</div>
      <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
        <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
        <div className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailBreak}>
          <p className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailText}>
            {subscriberInfo.first_name} {subscriberInfo.last_name}
          </p>
        </div>
      </div>
      <div className={style.mainCoordinatesContainer}>
        <div className={style.coordinates}>
          <p className={style.coordinatesWord}>Coordonnées</p>
          <p className={style.clientId}>Référence souscripteur : {subscriberInfo.subscriber_id}</p>
        </div>
        <div className={style.recipientContainer}>
          <div className={style.recipient}>
            <p style={{ fontSize: '13px' }}> Titulaire</p>
            <div className={style.name}>
              <p> {subscriberInfo.first_name} </p>
              <p className={style.lastName}> {subscriberInfo.last_name} </p>
            </div>
          </div>
          <p className={style.modify}>Modifier</p>
        </div>
        <div className={style.recipientContainer2}>
          <div className={style.recipient}>
            <p style={{ fontSize: '13px' }}> Numéro de téléphone</p>
            <div className={style.name}>
              <p className={style.lastName}> {subscriberInfo.phone_number} </p>
            </div>
          </div>
          <p className={style.modify}>Modifier</p>
        </div>
        <div className={style.recipientContainer3}>
          <div className={style.recipient}>
            <p style={{ fontSize: '13px' }}> Adresse </p>
            <div className={style.name}>
              <p className={style.lastName}> {subscriberInfo.address} </p>
            </div>
          </div>
          <p className={style.modify}>Modifier</p>
        </div>
      </div>
    </div>
  );
}

export default SubscriberDetails;
