import React, { useState } from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import style from './style/Offer.module.scss';

function Offer() {
  const [juniorCount, setJuniorCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);

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
      <h1>Combien de proches souhaitez-vous assurer ?</h1>
      <div className={style.countersMainContainer}>
        <div className={style.ageCounterMainContainer}>
          <div className={style.ageCounter}>
            <div>{juniorCount}</div>
            <div className={style.arrowBtn}>
              <ArrowDropUpIcon onClick={handleIncrementJuniorCount} />
              <ArrowDropDownIcon onClick={handleDecrementJuniorCount} />
            </div>
          </div>
          <div className={style.ageCounterTitle}>Juniors</div>
        </div>
        <div className={style.ageCounterMainContainer}>
          <div className={style.ageCounter}>
            <div>{adultCount}</div>
            <div className={style.arrowBtn}>
              <ArrowDropUpIcon onClick={handleIncrementAdultCount} />
              <ArrowDropDownIcon onClick={handleDecrementAdultCount} />
            </div>
          </div>
          <div className={style.ageCounterTitle}>Adultes</div>
        </div>
        <div className={style.ageCounterMainContainer}>
          <div className={style.ageCounter}>
            <div>{seniorCount}</div>
            <div className={style.arrowBtn}>
              <ArrowDropUpIcon onClick={handleIncrementSeniorCount} />
              <ArrowDropDownIcon onClick={handleDecrementSeniorCount} />
            </div>
          </div>
          <div className={style.ageCounterTitle}>Seniors</div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
