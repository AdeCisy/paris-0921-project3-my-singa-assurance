import React, { useContext, useEffect } from 'react';
import style from './style/SubscriberHasRecipients.module.scss';

import { getRecipients } from '../services/axios.service';
import RecipientsCards from './RecipientsCards';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

function SubscriberHasRecipients() {
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

  return (
    <div className={style.recipientsMainContainer}>
      <div className={style.recipientTitle}>Mes bénéficiaires</div>
      <div className={style.recipientInfo}>
        {recipientsInfo && recipientsInfo.map((element) => <RecipientsCards key={element.recipient_id} recipient={element} />)}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.recipientsButton}>Ajouter un bénéficiaire</button>
      </div>
    </div>
  );
}
export default SubscriberHasRecipients;
