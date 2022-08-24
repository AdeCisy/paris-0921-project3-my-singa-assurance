import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import style from './style/OfferRateCard.module.scss';

function OfferRateCard({ formule, price, isChecked, setIsChecked }) {
  const juniorCount = localStorage.getItem('JuniorCount');
  const adultCount = localStorage.getItem('AdultCount');
  const seniorCount = localStorage.getItem('SeniorCount');

  const arrayCount = [Number(juniorCount), Number(adultCount), Number(seniorCount)];
  const reducer = (a, b) => a + b;

  const resultCount = arrayCount.reduce(reducer);

  const pricePerMonth = resultCount * price;

  const HandleStyleModif = () => {
    setIsChecked({
      Bronze: false,
      Silver: false,
      Gold: false,
      [formule]: true,
    });
    localStorage.setItem('PricePerMonth', pricePerMonth);
  };

  return (
    <>
      {isChecked && (
        <div
          className={style.ratesMainWrapContainer}
          style={isChecked[formule] ? { border: 'solid 3px #2ad63e' } : { border: 'none' }}
          onClick={HandleStyleModif}
        >
          <div className={style.formuleType}>
            Singa {formule} <CheckCircleIcon className={isChecked[formule] ? style.checkBoxOn : style.checkBoxOff} />
          </div>
          <div className={style.formuleCount}>
            <div className={style.count}>{resultCount} proche(s) couvert(s)</div>
            <div>Modifier</div>
          </div>
          <div className={style.formulePrice}>
            <div className={style.price}>
              <div className={style.pricePerMonth}>{pricePerMonth} € </div>
              <div>/ mois</div>
            </div>
            <div className={style.commitment}>sur un an d&apos;engagement</div>
          </div>
          <div className={style.formuleConditions}>Couverture des frais à 80%</div>
        </div>
      )}
    </>
  );
}

export default OfferRateCard;
