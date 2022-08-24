import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './style/Header.module.scss';
import Logo from '/assets/logo.png';

function Header() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };

  const goOffer = () => {
    navigate('/offer/offer');
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        <Link to="/" className={style.brand}>
          <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
          <p className={style.logo}>singa</p>
        </Link>
        <ul className={style.menu}>
          <Link to="/">Accueil</Link>
          <Link to="/concept">Mode d&apos;emploi</Link>
          <Link to="/actus">Actus</Link>
        </ul>
        <div className={style.buttons}>
          <button className={style.offers} onClick={goOffer}>
            Consulter les offres
          </button>
          <button onClick={handleLogIn} className={style.account}>
            Se connecter
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
