import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackOutlinedIconLeft from '@material-ui/icons/ArrowBackOutlined';
import ArrowEastIcon from '@mui/icons-material/East';

import portrait from '/assets/portraitRecipient.png';
import lightbulb from '/assets/lightBulb.png';

import style from './style/Offer.module.scss';

function Offer() {
  const navigate = useNavigate();

  const goRecipientLocation = () => {
    navigate('/offer/recipientLocation');
  };

  const goHome = () => {
    navigate('/');
  };

  const Emoji = (props) => (
    <span className={style.emojiHandright} role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  const [juniorCount, setJuniorCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const color = { color: '#2ad63e' };
  const noColor = {};

  localStorage.setItem('JuniorCount', juniorCount);
  localStorage.setItem('AdultCount', adultCount);
  localStorage.setItem('SeniorCount', seniorCount);

  function handleIncrementJuniorCount() {
    if (juniorCount >= 5) {
      return setJuniorCount(5);
    } else {
      return setJuniorCount(juniorCount + 1);
    }
  }

  function handleDecrementJuniorCount() {
    if (juniorCount <= 0) {
      return setJuniorCount(0);
    } else {
      return setJuniorCount(juniorCount - 1);
    }
  }

  function handleIncrementAdultCount() {
    if (adultCount >= 5) {
      return setAdultCount(5);
    } else {
      return setAdultCount(adultCount + 1);
    }
  }

  function handleDecrementAdultCount() {
    if (adultCount <= 0) {
      return setAdultCount(0);
    } else {
      return setAdultCount(adultCount - 1);
    }
  }

  function handleIncrementSeniorCount() {
    if (seniorCount >= 5) {
      return setSeniorCount(5);
    } else {
      return setSeniorCount(seniorCount + 1);
    }
  }

  function handleDecrementSeniorCount() {
    if (seniorCount <= 0) {
      return setSeniorCount(0);
    } else {
      return setSeniorCount(seniorCount - 1);
    }
  }

  return (
    <div className={style.mainOfferContainer}>
      <div className={style.RecipientLocationTitle}>
        <div className={style.RecipientLocationMainPortrait}>
          <img src={portrait} alt="user" className={style.RecipientLocationPortrait} />
        </div>
        <div className={style.RecipientLocationTextTitle}>
          <h3 className={style.RecipientLocationPresentation}>
            Bonjour, ici Paul !<Emoji label="smiling face" symbol="😃" /> J&apos;ai quelques questions pour trouver votre formule adaptée
          </h3>
        </div>
      </div>
      <h1>Combien de proches souhaitez-vous assurer ?</h1>
      <div className={style.countersMainContainer}>
        <div className={style.countersContainer}>
          <div className={style.ageCounterMainContainer}>
            <div className={style.ageCounter}>
              <div style={juniorCount > 0 ? color : noColor}>{juniorCount}</div>
              <div className={style.arrowBtn}>
                <ArrowDropUpIcon onClick={handleIncrementJuniorCount} />
                <ArrowDropDownIcon onClick={handleDecrementJuniorCount} />
              </div>
            </div>
            <div className={style.ageCounterTitle}>Juniors</div>
            <p className={style.ageCounterText}>(-21 ans)</p>
          </div>
          <div className={style.ageCounterMainContainer}>
            <div className={style.ageCounter}>
              <div style={adultCount > 0 ? color : noColor}>{adultCount}</div>
              <div className={style.arrowBtn}>
                <ArrowDropUpIcon onClick={handleIncrementAdultCount} />
                <ArrowDropDownIcon onClick={handleDecrementAdultCount} />
              </div>
            </div>
            <div className={style.ageCounterTitle}>Adultes</div>
            <p className={style.ageCounterText}>(21 à 56 ans)</p>
          </div>
          <div className={style.ageCounterMainContainer}>
            <div className={style.ageCounter}>
              <div style={seniorCount > 0 ? color : noColor}>{seniorCount}</div>
              <div className={style.arrowBtn}>
                <ArrowDropUpIcon onClick={handleIncrementSeniorCount} />
                <ArrowDropDownIcon onClick={handleDecrementSeniorCount} />
              </div>
            </div>
            <div className={style.ageCounterTitle}>Seniors</div>
            <p className={style.ageCounterText}>(56 à 64 ans)</p>
          </div>
        </div>
        <div className={style.CountertextBulb}>
          <div className={style.RecipientLocationIconLightBulbMain}>
            <img src={lightbulb} alt="idea" className={style.CounterIconLightBulb} />
          </div>
          <div className={style.ageCounterTextbulb}>Dites-nous le nombre de proches à assurer pour vous proposer une offre personnalisée</div>
        </div>
      </div>
      <div className={style.CounterOfferBtn}>
        <button className={style.AgeCounterDirectionButtonBack}>
          <ArrowBackOutlinedIconLeft style={{ color: '#525252' }} />
          <p className={style.AgeCounterDirectionButtonBackText} onClick={goHome}>
            Retour
          </p>
        </button>
        <button className={style.AgeCounterDirectionButtonNext}>
          <p className={style.AgeCounterDirectionButtonNextText} onClick={goRecipientLocation}>
            C&apos;est parti
          </p>
          <ArrowEastIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default Offer;
