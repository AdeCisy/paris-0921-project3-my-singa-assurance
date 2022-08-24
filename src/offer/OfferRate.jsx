import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getOptionsInfo } from '../services/axios.service';
import OfferRateCard from './OfferRateCard';
import portrait from '/assets/portraitRecipient.png';

import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowEastIcon from '@mui/icons-material/East';

import style from './style/OfferRate.module.scss';

function OfferRate() {
  const [formule, setFormule] = useState([]);
  const [isChecked, setIsChecked] = useState({
    Bronze: false,
    Silver: false,
    Gold: false,
  });
  const navigate = useNavigate();

  useEffect(async () => {
    const getData = async () => {
      const res = await getOptionsInfo();
      return res.data;
    };
    const result = await getData();
    setFormule(result);
  }, []);

  const handleGoToSubscribtion = () => {
    navigate('/createaccount/step1');
  };

  const returnToRecipientLocation = () => {
    navigate('/offer/recipientLocation');
  };

  return (
    <div className={style.mapContainer}>
      <div className={style.RecipientLocationTitle}>
        <button className={style.RecipientLocationButton} onClick={returnToRecipientLocation}>
          <div className={style.RecipientLocationIcon}>
            <ArrowBackOutlinedIcon className={style.RecipientLocationIconArrow} />
          </div>
          <div className={style.returnButtonOfferRate}>Retour</div>
        </button>
        <div className={style.mainTitleOfferRate}>
          <div className={style.RecipientLocationMainPortrait}>
            <img src={portrait} alt="user" className={style.RecipientLocationPortrait} />
          </div>
          <div className={style.RecipientLocationTextTitle}>
            <h3 className={style.RecipientLocationPresentation}>Voici les formules que nous proposons pour vos proches</h3>
          </div>
        </div>
      </div>
      <div className={style.ratesMainContainer}>
        {formule.length &&
          formule.map((element) => {
            return (
              <OfferRateCard
                key={element.formule_id}
                formule={element.formule_name}
                price={element.formule_details}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            );
          })}
      </div>

      <button className={style.btnNext} onClick={handleGoToSubscribtion}>
        <div className={style.RecipientLocationIcon}>
          <ArrowEastIcon className={style.RecipientLocationIconArrow} />
        </div>
        <div className={style.returnButtonOfferRate}>J&apos;assure mes proches</div>
      </button>
    </div>
  );
}

export default OfferRate;
