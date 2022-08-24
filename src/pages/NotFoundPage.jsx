import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/NotFoundPage.module.scss';
import logo from '/assets/logo.png';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBackHome = () => {
    navigate('/');
  };

  return (
    <div className={style.errorMessage}>
      <p className={style.error}>
        4 <img className={style.logo} src={logo} alt="logo" /> 4
      </p>
      <h2>Oops, je n&apos;ai pas trouvé la page que vous cherchiez.</h2>
      <h3>Il est possible que la page que vous demandez n&apos;éxiste pas.</h3>
      <button className={style.goBack} onClick={handleGoBackHome}>
        Retournez à l&apos;accueil
      </button>
    </div>
  );
}

export default NotFoundPage;
