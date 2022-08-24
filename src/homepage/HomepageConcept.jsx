import React from 'react';
import ConceptCard from './ConceptCard';
import ConceptButtons from './ConceptButtons';

import style from './style/HomepageConcept.module.scss';
import MyImgConcept from '/assets/MyImgConcept.png';
import MyImgConcept2 from '/assets/MyImgConcept2.png';
import MyImgConcept3 from '/assets/MyImgConcept3.png';
import Hospitalisation from '/assets/hospitalisation.png';
import Maternité from '/assets/maternité.png';
import Optique from '/assets/optique.png';
import FraisMedicaux from '/assets/fraisMedicaux.png';
import Dentaire from '/assets/dentaire.png';
import Teleconsultation from '/assets/teleconsultation.png';

function HomepageConcept() {
  const Concepts = [
    {
      title: '1',
      src: MyImgConcept,
      description: 'Versez une cotisation mensuelle basée sur le nombre de proches à assurer et leur tranche d’âge.',
    },
    {
      title: '2',
      src: MyImgConcept2,
      description: 'Vos proches se rendent chez les partenaires santé en présentant leur carte Singa.',
    },
    {
      title: '3',
      src: MyImgConcept3,
      description: 'Ils n’auront pas à avancer les frais couverts par Singa.',
    },
  ];

  const BtnConcepts = [
    {
      icone: Hospitalisation,
      title: ' Hospitalisation',
      arg: ['chambre', 'frais traitements médicaux', 'visite généraliste', 'visite spécialiste petite chirurgie'],
    },
    {
      icone: Maternité,
      title: ' Maternité',
      arg: ['frais pré et post-natal', 'accouchement simple', 'accouchement multiple', 'accouchement chirurgical'],
    },
    {
      icone: Optique,
      title: ' Optique',
    },
    {
      icone: FraisMedicaux,
      title: ' Frais médicaux',
      arg: ['Consultation généraliste', 'Frais pharmaceutiques', 'Radiologie & Imagerie', 'Analyses biologiques'],
    },
    {
      icone: Dentaire,
      title: ' Dentaire',
      arg: ['Soins et prothèses dentaires'],
    },
    {
      icone: Teleconsultation,
      title: ' Téléconsultation',
    },
  ];

  return (
    <div className={style.mainConceptCard}>
      <h2>Découvrez notre Concept</h2>
      <div className={style.resume}>
        <div className={style.resumeTitle}> Une formule à la carte </div>
        <p>
          Choisissez la couverture adaptée à votre situation (besoins de santé, l&apos;age des bénéficaires, leur nombre) afin d&apos;accéder aux
          professionnels et pharmacies agréées Singa.
        </p>
        <div className={style.resumeTitle}> Une assurance flexible </div>
        <p>Rajoutez n’importe quel membre de votre entourage à une formule à n’importe quel moment sur votre espace.</p>
        <div className={style.resumeTitle}> Un suivi des prestations facile </div>
        <p>Suivez les prélèvements ainsi que le plafond et les prestations de vos proches sur votre espace dédié.</p>
      </div>
      <div className={style.conceptTitle2}>Comment ça fonctionne ?</div>
      <div className={style.cardContainer}>
        {Concepts.map((card) => {
          return <ConceptCard key={card.title} title={card.title} src={card.src} desc={card.description} />;
        })}
      </div>
      <div className={style.BtnContainer}>
        {BtnConcepts.map((button) => {
          return <ConceptButtons key={button.icone} icone={button.icone} title={button.title} arg={button.arg} />;
        })}
      </div>
    </div>
  );
}

export default HomepageConcept;
