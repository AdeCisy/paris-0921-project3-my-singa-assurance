import React from 'react';
import { Outlet } from 'react-router-dom';

import SubscriberHeader from '../subscriber/SubscriberHeader';
import SubscriberLeftNavBar from '../subscriber/SubscriberLeftNavBar';
import Footer from '../components/Footer';

import style from './style/SubscriberPage.module.scss';

function SubscriberPage() {
  return (
    <div className={style.subscriberMainContainer}>
      <SubscriberHeader />
      <div className={style.downMainContainer}>
        <SubscriberLeftNavBar />
        <div className={style.rightContainer}>
          <Outlet />
          <div className={style.subscriberFooter}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberPage;
