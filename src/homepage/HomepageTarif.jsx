import React from 'react';
import { useNavigate } from 'react-router-dom';
import TarifCard from './TarifCard';

import style from './style/HomepageTarif.module.scss';

function HomepageTarif() {
  const Formules = [
    {
      title: ' 🥉 Bronze',
      couverture: '60',
      description: 'Ipsum Lorem',
      prix: '50',
    },
    {
      title: ' 🥈 Silver',
      couverture: '70',
      description: 'Ipsum Lorem',
      prix: '100',
    },
    {
      title: '🥇 Gold',
      couverture: '80',
      description: 'Ipsum Lorem',
      prix: '150',
    },
  ];

  const navigate = useNavigate();

  const GoOffer = () => {
    navigate('/offer/offer');
  };

  return (
    <div className={style.mainTarifCard}>
      <h2>Nos Formules</h2>
      <div className={style.tarifResume}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </div>
      <div className={style.tarifContainer}>
        {Formules.map((card) => {
          return (
            <TarifCard key={card.title} title={card.title} couverture={card.couverture} desc={card.description} prix={card.prix} color={card.color} />
          );
        })}
      </div>
      <div className={style.buttons}>
        <button className={style.offers} onClick={GoOffer}>
          Comparer les offres
        </button>
      </div>
    </div>
  );
}

export default HomepageTarif;
