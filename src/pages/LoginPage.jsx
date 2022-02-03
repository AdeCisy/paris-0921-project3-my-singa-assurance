import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { logIn } from '../services/axios.service';
import Header from '../components/Header';
import SubscriberInfoContext from '../context/SubscriberInfoContext';
import AuthenticationContext from '../context/AuthenticationContext';

import style from './style/LoginPage.module.scss';
import Background from '/assets/LoginBackground.png';

function LoginPage() {
  const [logInError, setLogInError] = useState({
    error: false,
    message: '',
  });
  const { setDecodedToken } = useContext(SubscriberInfoContext);
  const { setIsLogIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email requis'),
    password: Yup.string()
      .required('Mot de passe requis')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const result = await logIn(data);

    if (result.error) {
      setLogInError(result);
      return undefined;
    }

    setDecodedToken(result.data);
    setIsLogIn(true);
    navigate('/subscribers/welcome');
  };

  return (
    <div className={style.loginPageHeader}>
      <Header />
      <div className={style.mainLoginPageContainer}>
        <div className={style.mainText}>
          <div className={style.logintitle}>
            <p>La distance n&apos;est plus un obstacle</p>
            <p>à la santé de vos proches</p>
          </div>
          <div className={style.loginText1}>
            <p>Bon retour parmi nous ! Connectez vous pour accèder </p>
            <p>à votre espace personnel</p>
          </div>
          <p className={logInError.error ? style.logInError : style.logInOk}>{logInError?.message}</p>
          <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.loginEmail}>
              <label htmlFor="email" className={style.loginEmailLabel}>
                Adresse mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={style.loginEmailInput}
                {...register('email')}
                placeholder={errors.email?.message}
              />
            </div>
            <div className={style.loginPassword}>
              <label htmlFor="password" className={style.loginPasswordLabel}>
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={style.loginPasswordInput}
                {...register('password')}
                placeholder={errors.password?.message}
              />
            </div>
            <div className={style.loginOptionButton}>
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="checkbox" className={style.loginRememberMe}>
                  Se rappeler de moi
                </label>
              </div>
              <div className={style.loginPasswordForgetButton}>Mot de passe oublié ?</div>
            </div>
            <div className={style.loginAccountButton}>
              <input className={style.loginConnexionButton} type="submit" />
              <button className={style.loginRegisterButton} onClick={handleCreateAccount}>
                S&apos;inscrire
              </button>
            </div>
          </form>
        </div>
        <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
      </div>
    </div>
  );
}

export default LoginPage;
