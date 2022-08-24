import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import EcoIcon from '@material-ui/icons/Eco';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import style from './style/SubscriberLeftNavBar.module.scss';

function SubscriberLeftNavBar() {
  return (
    <div className={style.subscriberTitleContainer}>
      <div className={style.subscriberStickyNavBar}>
        <Link to="/subscribers/welcome" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <HomeIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Bienvenue</p>
        </Link>

        <Link to="/subscribers/recipient/" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <PeopleAltIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Mes bénéficiaires</p>
        </Link>

        <Link to="/subscribers/factures" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <CreditCardIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Factures & Paiements</p>
        </Link>

        <Link to="/subscribers/contrats" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <DescriptionIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Contrats & Documents</p>
        </Link>
        <Link to="/subscribers/actionsSolidaires" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <EcoIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Actions Solidaires</p>
        </Link>
        <Link to="/subscribers/contact" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <QuestionAnswerIcon className={style.subscriberNavaBarIcon} />
          </div>
          <p className={style.subscriberText}>Nous contacter</p>
        </Link>
      </div>
    </div>
  );
}

export default SubscriberLeftNavBar;
