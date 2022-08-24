import React, { useMemo, useEffect, useContext } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import countryList from 'react-select-country-list';

import SubscriberInfoContext from '../context/SubscriberInfoContext';
import { createRecipient } from '../services/axios.service';

import style from './style/FormSignUpAddRecipients.module.scss';
import portrait from '/assets/portraitRecipient.png';
import Logo from '/assets/logo.png';
import FormHeader3 from '/assets/FormHeader3.png';

const validationSchema = Yup.object().shape({
  recipients: Yup.array().of(
    Yup.object().shape({
      first_name: Yup.string().required('Prénom requis'),
      last_name: Yup.string().required('Nom requis'),
      birth_date: Yup.string().required('Date de naissance requise'),
      living_country: Yup.string().required('Pays de résidence requis'),
      subscriber_family_relation: Yup.string().required('Lien de parenté requis'),
      address: Yup.string().required('Adresse requise'),
    }),
  ),
});

function FormSignUpAddRecipients() {
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const { decodedToken } = useContext(SubscriberInfoContext);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });
  const { fields, append, remove } = useFieldArray({ name: 'recipients', control });

  useEffect(() => {
    const totalRecipients =
      Number(localStorage.getItem('JuniorCount')) + Number(localStorage.getItem('AdultCount')) + Number(localStorage.getItem('SeniorCount'));
    for (let i = 0; i < totalRecipients; i++) {
      remove(i);
    }
    for (let i = 0; i < totalRecipients; i++) {
      append({ first_name: '', last_name: '', birth_date: '', living_country: '', subscriber_family_relation: '', address: '' });
    }
  }, []);

  const onSubmit = async (data) => {
    data.recipients.map(
      async (recipient) =>
        await createRecipient({
          ...recipient,
          birth_date: new Date(recipient.birth_date).toISOString().split('.')[0] + 'Z',
          subscriber_subscriber_id: decodedToken.id,
          city: localStorage.getItem('place'),
          create_date: new Date().toISOString().split('.')[0] + 'Z',
        }),
    );
    navigate('/subscribers/welcome');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const GoHome = () => {
    navigate('/');
  };

  return (
    <div className={style.mainForm3Container}>
      <header className={style.header}>
        <nav className={style.container}>
          <div className={style.brand} onClick={GoHome}>
            <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
            <p className={style.logo}>singa</p>
          </div>
          <img src={FormHeader3} className={style.greenBtn} alt="Form Header Steps" />
        </nav>
      </header>
      <div className={style.formTitle}>
        <div className={style.FormSignUpAddRecipientMainPortrait}>
          <img src={portrait} alt="user" className={style.FormSignUpAddRecipientPortraitDetail} />
        </div>
        <p className={style.title}>Qui sont les proches à assurer ?</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={index} className={style.formContainer}>
            <p>Vos Bénéficiaires</p>
            <div className={style.formGroup}>
              <div>
                <label htmlFor={`recipients[${index}]first_name`}>Prénom</label>
                <input
                  type="text"
                  name={`recipients[${index}]first_name`}
                  id={`recipients[${index}]first_name`}
                  className={errors.recipients?.[index]?.first_name ? style.isInvalid : null}
                  {...register(`recipients.${index}.first_name`)}
                />
                <p className={errors.recipients?.[index]?.first_name ? style.isInvalid : null}>{errors.recipients?.[index]?.first_name?.message}</p>
              </div>
              <div>
                <label htmlFor={`recipients[${index}]last_name`}>Nom</label>
                <input
                  type="text"
                  name={`recipients[${index}]last_name`}
                  id={`recipients[${index}]last_name`}
                  {...register(`recipients.${index}.last_name`)}
                  className={errors.recipients?.[index]?.last_name ? style.isInvalid : null}
                />
                <p className={errors.recipients?.[index]?.last_name ? style.isInvalid : null}>{errors.recipients?.[index]?.last_name?.message}</p>
              </div>
              <div>
                <label htmlFor={`recipients[${index}]birth_date`}>Date de naissance</label>
                <input
                  type="date"
                  name={`recipients[${index}]birth_date`}
                  id={`recipients[${index}]birth_date`}
                  {...register(`recipients.${index}.birth_date`)}
                  className={errors.recipients?.[index]?.birth_date ? style.isInvalid : null}
                />
                <p className={errors.recipients?.[index]?.birth_date ? style.isInvalid : null}>{errors.recipients?.[index]?.birth_date?.message}</p>
              </div>
            </div>
            <div className={style.formGroupSelect}>
              <div>
                <label htmlFor={`recipients[${index}]living_country`}>Pays</label>
                <select
                  name={`recipients[${index}]living_country`}
                  id={`recipients[${index}]living_country`}
                  {...register(`recipients.${index}.living_country`)}
                  className={errors.recipients?.[index]?.living_country ? style.isInvalid : null}
                >
                  {options.map((item, i) => (
                    <option key={i} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <p className={errors.recipients?.[index]?.living_country ? style.isInvalid : null}>
                  {errors.recipients?.[index]?.living_country?.message}
                </p>
              </div>
              <div>
                <label htmlFor={`recipients[${index}]subscriber_family_relation`}>Lien de parenté</label>
                <select
                  name={`recipients[${index}]subscriber_family_relation`}
                  id={`recipients[${index}]subscriber_family_relation`}
                  {...register(`recipients.${index}.subscriber_family_relation`)}
                  className={errors.recipients?.[index]?.subscriber_family_relation ? style.isInvalid : null}
                >
                  <option value="pere-mere">Père / Mère</option>
                  <option value="oncle_tante">Oncle / Tante</option>
                  <option value="neuveu_niece">Neuveu / Nièce</option>
                  <option value="cousin-e">Cousin / Cousine</option>
                </select>
                <p className={errors.recipients?.[index]?.subscriber_family_relation ? style.isInvalid : null}>
                  {errors.recipients?.[index]?.subscriber_family_relation?.message}
                </p>
              </div>
            </div>
            <div className={style.formGroupAddress}>
              <div>
                <label htmlFor={`recipients[${index}]address`}>Adresse postale</label>
                <input
                  type="text"
                  name={`recipients[${index}]address`}
                  id={`recipients[${index}]address`}
                  {...register(`recipients.${index}.address`)}
                  className={errors.recipients?.[index]?.address ? style.isInvalid : null}
                />
                <p className={errors.recipients?.[index]?.address ? style.isInvalid : null}>{errors.recipients?.[index]?.address?.message}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={style.formBtn}>
          <button className={style.btnBack} onClick={handleGoBack}>
            Retour
          </button>
          <button disabled={!isValid} className={style.btnNext} type="submit">
            J&apos;enregistre mes bénéficiaires
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSignUpAddRecipients;
