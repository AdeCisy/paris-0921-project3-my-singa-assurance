import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { createSubscriberAccount, logIn } from '../services/axios.service';
import AuthenticationContext from '../context/AuthenticationContext';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

import LockIcon from '@material-ui/icons/Lock';
import style from './style/FormSignUpStep2.module.scss';
import portrait from '/assets/portraitRecipient.png';
import Logo from '/assets/logo.png';
import FormHeader2 from '/assets/FormHeader2.png';
import visibilityOff from '/assets/visibility_off.png';
import visibilityOn from '/assets/visibility.png';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Doit contenir au moins 8 caractéres, 1 majuscule, un chiffre et un caractére spécial',
    )
    .required('Mot de passe requis'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre'),
});

function FormSignUpStep2() {
  const { registerationData, setIsLogIn } = useContext(AuthenticationContext);
  const { setDecodedToken } = useContext(SubscriberInfoContext);

  const [isCreated, setIsCreated] = useState(false);

  const [visibility, setVisibility] = useState(false);
  const handleShowPassword = () => {
    setVisibility(!visibility);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const GoHome = () => {
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    delete data.confirmPassword;
    const created = await createSubscriberAccount({
      ...registerationData,
      ...data,
      create_date: new Date().toISOString().split('.')[0] + 'Z',
    });

    if (created.status === 201) setIsCreated(true);

    const loggedin = await logIn({
      email: registerationData.email,
      password: data.password,
    });

    if (loggedin.error === false) {
      setIsLogIn(true);
      setDecodedToken(loggedin.data);
      setTimeout(() => {
        navigate('/createaccount/step3');
      }, 2000);
    }
  };

  return (
    <div className={style.mainForm2Container}>
      <header className={style.header}>
        <nav className={style.container}>
          <div className={style.brand} onClick={GoHome}>
            <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
            <p className={style.logo}>singa</p>
          </div>
          <img src={FormHeader2} className={style.greenBtn} alt="Form Header Steps" />
        </nav>
      </header>
      <div className={style.formTitle}>
        <div className={style.FormSignUpStep2MainPortrait}>
          <img src={portrait} alt="user" className={style.FormSignUpStep2MainPortraitDetail} />
        </div>
        <p className={style.title}>Finalisons la création de votre compte</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formContainer}>
          <p className={style.iconContainer}>
            <LockIcon label="lock" className={style.icon} /> Créez votre mot de passe
          </p>
          <div className={style.subFormContainer}>
            <label htmlFor="password" style={{ fontWeight: 'bold' }}>
              Mot de passe
            </label>
            <div className={style.formSignUpSpace}>
              <input
                className={style.input}
                type={visibility ? 'text' : 'password'}
                name="password"
                id="password1"
                {...register('password')}
                placeholder="********"
                style={errors.password ? { borderColor: 'red' } : null}
              />
              <img
                src={visibility ? visibilityOff : visibilityOn}
                id="togglePassword"
                alt="hidePassword"
                className={style.formSignUpVisibilityOffImage}
                onClick={handleShowPassword}
              />
            </div>
            <p className={errors.password ? style.isInvalid : null}>{errors.password?.message}</p>
          </div>
          <div className={style.subFormContainer}>
            <label htmlFor="confirmPassword" style={{ fontWeight: 'bold' }}>
              Confirmation du mot de passe
            </label>
            <div className={style.formSignUpSpace}>
              <input
                className={style.input}
                type={visibility ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                {...register('confirmPassword')}
                placeholder="********"
                style={errors.password ? { borderColor: 'red' } : null}
              />
              <img
                src={visibility ? visibilityOff : visibilityOn}
                id="togglePassword"
                alt="hidePassword"
                className={style.formSignUpVisibilityOffImage}
                onClick={handleShowPassword}
              />
            </div>

            <p className={errors.confirmPassword ? style.isInvalid : null}>{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <div className={style.formBtn}>
          <button className={style.btnBack} onClick={handleGoBack}>
            Retour
          </button>
          <button disabled={!isValid} className={style.btnNext} type="submit">
            Créer
          </button>
        </div>
      </form>
      <div className={style.created}>
        <p className={isCreated ? style.showCreated : style.hideCreated}>Votre espace adhérent a bien été créé</p>
      </div>
    </div>
  );
}

export default FormSignUpStep2;
