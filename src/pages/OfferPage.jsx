import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

import style from './style/OfferPage.module.scss';

function OfferPage() {
  return (
    <div className={style.offerHeaderMainContainer}>
      <Header />
      <Outlet />
    </div>
  );
}

export default OfferPage;
