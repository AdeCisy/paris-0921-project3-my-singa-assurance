import React from 'react';

import Contact1 from '/assets/Contact1.png';
import Contact2 from '/assets/Contact2.png';

import style from './style/ContactPage.module.scss';

function Contact() {
  return (
    <div className={style.mainContactPageContainer}>
      <div className={style.textContact}>
        <h2 className={style.titleContact}>
          <span className={style.span1}>Besoin de plus d&apos;explications ? </span> <span className={style.span2}>Joignez nous !</span>
        </h2>
        <p className={style.contactDescricption}>Trouvez la réponse à votre question dans notre FAQ ou échangez avec notre équipe d&apos;experts.</p>
      </div>
      <div className={style.imageContainer}>
        <div className={style.imageRight}>
          <img src={Contact1} alt="Contact1" className={style.contact1} />
          <h3 className={style.titleImage1}>Questions fréquentes</h3>
          <p className={style.descriptionImage1}>Trouvez la réponse à votre question dans notre FAQ</p>
          <button className={style.btnImage1}>Consulter la FAQ</button>
        </div>
        <div className={style.imageLeft}>
          <img src={Contact2} alt="Contact2" className={style.contact2} />
          <h3 className={style.titleImage2}>Parlez à un conseiller</h3>
          <p className={style.descriptionImage2}>Vous pouvez poser toutes vos questions ici</p>
          <button className={style.btnImage2}>Poser une question</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
