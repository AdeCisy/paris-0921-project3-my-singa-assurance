import React, { useContext, useEffect } from 'react';

import { getRecipients } from '../services/axios.service';
import SubscriberHomePageRecipientCards from './SubscriberHomePageRecipientCards';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/SubscriberWelcomePage.module.scss';
import Class from '/assets/class.png';

function SubscriberWelcomePage() {
  const { decodedToken, recipientsInfo, setRecipientsInfo } = useContext(SubscriberInfoContext);

  useEffect(async () => {
    const id = decodedToken.id;
    const getData = async () => {
      const res = await getRecipients(id);
      return res.data;
    };
    const result = await getData();
    setRecipientsInfo(result);
  }, []);

  const Emoji = (props) => (
    <span className={style.emojiHandright} role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  return (
    <div className={style.mainContainerSubscriberWelcomePage}>
      <div className={style.subscriberWelcomePagePaymentInformation}>
        <p className={style.subscriberWelcomePagePaymentInformationText}>Paiement de 20.50€TTC par prélèvement automatique - A venir</p>
      </div>
      <div className={style.subscriberWelcomePagetitleContainer}>
        <h1 className={style.subscriberWelcomePagetitleContainerText}>
          Bonjour <span className={style.SuscriberdecodedToken}>{decodedToken.firstName} !</span>
        </h1>
      </div>
      <div className={style.subscriberWelcomePagesubtextbeneficiaries}>
        <p className={style.subscriberWelcomePagesubtextbeneficiariesText}>
          Comment vont vos bénéficiaires ? <span className={style.subscriberWelcomePagesubtextbeneficiariesTextBold}>Jetez-y un oeil ici</span>{' '}
          <Emoji label="backHand Index pointing left" symbol="👈" />
        </p>
      </div>
      <div className={style.recipientInfo}>
        {recipientsInfo && recipientsInfo.map((element) => <SubscriberHomePageRecipientCards key={element.recipient_id} recipient={element} />)}
      </div>
      <div className={style.WelcomePageSingaActu}>
        <h2 className={style.WelcomePageSingaActuH2}>L’actualité Singa</h2>
        <h3 className={style.WelcomePageSingaActuH3}>RDC : début de la campagne de mobilisation des fonds pour la lutte anti-Covid-19</h3>
        <p className={style.WelcomePageSingaActuText}>
          Pour arrêter la pandémie et la propagation des multiples variants circulant à travers le monde, il existe une solution : rendre le vaccin
          contre la Covid-19 accessible à tous et de manière équitable dans chaque pays.
        </p>
        <p className={style.WelcomePageSingaActuKnowMore}>En savoir plus</p>
        <button className={style.WelcomePageSingaActuButton}>Faire un don</button>
        <h3 className={style.WelcomePageSingaActuH3}>C’est grâce à vous : une nouvelle école pour les codeurs à Kinshasa</h3>
        <p className={style.WelcomePageSingaActuText}>
          École privée des codeurs et développeurs informatique, Kinshasa Digital Academy a ouvert ses portes dans la capitale de la RDC. Plusieurs
          organisations et institutions dont, la présidence de la République, l&rsquo;Union européenne et Facebook sont partenaires de ce projet
        </p>
        <p className={style.WelcomePageSingaActuKnowMore}>En savoir plus</p>
        <img src={Class} alt="people in a class" />
      </div>
    </div>
  );
}

export default SubscriberWelcomePage;
