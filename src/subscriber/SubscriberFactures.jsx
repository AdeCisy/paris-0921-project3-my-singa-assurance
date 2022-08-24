import React from 'react';

import style from './style/SubscriberFacture.module.scss';

function SubscriberFactures() {
  return (
    <div className={style.mainFacturesContainer}>
      <div className={style.textFactures}>
        <h2 className={style.titleFacture}>Ma dernière facture</h2>
        <div className={style.titlesFactures}>
          <h4 className={style.ptitleFactures}>Comprendre la facture</h4>
          <button className={style.telechargeFactures}>Télécharger</button>
        </div>
        <div className={style.detailsFactures}>
          10/01/2022 --- Dernier paiement de XXX € par prélèvement automatique - <b>Effectué</b>
        </div>
        <ul className={style.listeFactures}>
          <li>
            11/10/2021 --- Paiement de 20.50 € par prélèvement automatique - <b>Effectué</b>
          </li>
          <li>
            09/08/2021 --- Paiement de 20.50 € par prélèvement automatique - <b>Effectué</b>
          </li>
          <li>
            10/06/2021 --- Paiement de 20.50 € par prélèvement automatique - <b>Effectué</b>
          </li>
          <li>
            09/04/2021 --- Paiement de 20.50 € par prélèvement automatique - <b>Effectué</b>
          </li>
        </ul>
        <button className={style.btnFactures}>Voir toutes mes factures</button>
        <div className={style.modeDePaiementFactures}>
          <div className={style.containerFactures}>
            <h3 className={style.modeDePaiementTitle}> Prochaine facture prévue le 10/02/2022</h3>
            <div className={style.containerFactures1}>
              <div className={style.changePaiement}>
                <h4 className={style.changePaiementTitle}>Mode de paiement</h4>
                <p className={style.changePaiementPar}>Prélèvement automatique tous les mois</p>
              </div>
              <div className={style.btnChange}>
                <button className={style.btn}> Changer </button>
              </div>
            </div>
            <hr></hr>
            <div className={style.containerFactures1}>
              <div className={style.changePaiement}>
                <h4 className={style.changePaiementTitle}>Coordonnées bancaires</h4>
                <p className={style.changePaiementPar}>FR76 3000 30** **** **** **** 789</p>
              </div>
              <div className={style.btnChange}>
                <button className={style.btn}> Mettre à jour </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberFactures;
