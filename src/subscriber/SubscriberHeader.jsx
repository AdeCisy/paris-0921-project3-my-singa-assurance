import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthenticationContext from '../context/AuthenticationContext';

import style from './style/SubscriberHeader.module.scss';
import Logo from '/assets/logo.png';

function SubscriberHeader() {
  const navigate = useNavigate();
  const { setIsLogIn } = useContext(AuthenticationContext);

  const handleLogIn = () => {
    setIsLogIn(false);
    navigate('/login');
  };

  const GoHome = () => {
    navigate('/');
  };

  const NeedHelp = () => {
    navigate('/subscribers/contact');
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        <div className={style.brand} onClick={GoHome}>
          <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
          <p className={style.logo}>singa</p>
        </div>
        <ul className={style.menu}>
          <Link to="/subscribers/welcome" className={style.brand}>
            Mon espace
          </Link>
          <li onClick={NeedHelp}>Aide</li>
          <Link to="/subscribers/subscriberDetails" className={style.brand}>
            Mon profil
          </Link>
          <li onClick={handleLogIn}>Se déconnecter</li>
        </ul>
      </nav>
    </header>
  );
}

export default SubscriberHeader;
