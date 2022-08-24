import React, { useContext, useEffect } from 'react';

import SubscriberInfoContext from '../context/SubscriberInfoContext';
import { getRecipients } from '../services/axios.service';

import feuille from '/assets/feuille.png';
import Feuilleetcrayon from '/assets/Feuilleetcrayon.png';
import Maçon from '/assets/Maçon.png';
import Tèlèchargement from '/assets/Tèlèchargement.png';

import style from './style/SubscriberContrat.module.scss';

function SubscriberContrats() {
  const { decodedToken, recipientsInfo, setRecipientsInfo } = useContext(SubscriberInfoContext);

  const pricePerMonth = localStorage.getItem('PricePerMonth');

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
    <div className={style.mainContratsContainer}>
      <h3 className={style.titleContrat}>Contrats</h3>
      <div className={style.textContainer}>
        <div className={style.titlesContrat}>
          <p className={style.plafondContrat}>Plafond de 1550€/mois/personnes</p>
          <div className={style.prixContrat}>
            <h4 className={style.ptitleContrats}>{recipientsInfo.length} personnes couvertes</h4>
            <b>{pricePerMonth} €/mois</b>
          </div>
        </div>
      </div>
      <h3 className={style.documentTitle}> Documents </h3>
      <div className={style.documentPersonas}>
        <h3 className={style.personas}>
          <div>{decodedToken.firstName} </div>
          <div className={style.lastName}>{decodedToken.lastName}</div>
        </h3>
      </div>
      <div className={style.documentContainer}>
        <div className={style.containerDocuments}>
          <img src={feuille} alt="feuille" />
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Conditions Générales de votre contrat</h4>
            <p className={style.docsPar}>Le document qui détaille toutes vos garanties</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
            <img src={Tèlèchargement} alt="Tèlèchargement" />
          </div>
        </div>
        <div className={style.containerDocuments}>
          <img src={Maçon} alt="maçon" />
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Attestation d’assurance</h4>
            <p className={style.docsPar}>La preuve que votre bénéficiaire est couvert par Singa</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
            <img src={Tèlèchargement} alt="Tèlèchargement" />
          </div>
        </div>
        <div className={style.containerDocuments}>
          <img src={Feuilleetcrayon} alt="feuilleetcrayon" />
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Contrat d’assurance</h4>
            <p className={style.docsPar}>Votre contrat</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
            <img src={Tèlèchargement} alt="Tèlèchargement" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberContrats;
