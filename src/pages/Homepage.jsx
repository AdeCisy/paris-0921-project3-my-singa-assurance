import React from 'react';

import Header from '../components/Header';
import HomepagePresentation from '../homepage/HomepagePresentation';
import HomepageTarif from '../homepage/HomepageTarif';
import HomepageConcept from '../homepage/HomepageConcept';
import Footer from '../components/Footer';
import ContactPage from '../components/ContactPage';

function Homepage() {
  return (
    <>
      <Header />
      <HomepagePresentation />
      <HomepageTarif />
      <HomepageConcept />
      <ContactPage />
      <Footer />
    </>
  );
}

export default Homepage;
