import React from 'react';

import Header from '../components/Header';
import HomePageConcept from '../homepage/HomepageConcept';
import Footer from '../components/Footer';

import style from './style/ConceptPage.module.scss';

function ConceptPage() {
  return (
    <div className={style.conceptPageWrapper}>
      <Header />
      <HomePageConcept />
      <Footer />
    </div>
  );
}

export default ConceptPage;
