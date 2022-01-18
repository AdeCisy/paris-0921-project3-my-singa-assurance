import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ActusPage from './pages/ActusPage';
import OfferPage from './pages/OfferPage';
import Offer from './offer/Offer';
import OfferRate from './offer/OfferRate';
import RecipientLocation from './offer/RecipientLocation';
import Actus from './components/Actus';
import SubscriberPage from './pages/SubscriberPage';
import SubscriberWelcomePage from './subscriber/SubscriberWelcomePage';
import SubscriberHasRecipients from './subscriber/SubscriberHasRecipients';
import Contact from './components/ContactPage';
import FormPage from './pages/FormPage';
import FormSignUpStep1 from './formSignUp/FormSignUpStep1';
import FormSignUpStep2 from './formSignUp/FormSignUpStep2';
import SubscriberFactures from './subscriber/SubscriberFactures';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actus" element={<ActusPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormPage />}>
          <Route path="step1" element={<FormSignUpStep1 />} />
          <Route path="step2" element={<FormSignUpStep2 />} />
        </Route>
        <Route path="/offer" element={<OfferPage />}>
          <Route path="offer" element={<Offer />} />
          <Route path="recipientLocation" element={<RecipientLocation />} />
          <Route path="rates" element={<OfferRate />} />
        </Route>
        <Route path="/subscribers" element={<SubscriberPage />}>
          <Route path="welcome" element={<SubscriberWelcomePage />} />
          <Route path="recipients" element={<SubscriberHasRecipients />} />
          <Route path="factures" element={<SubscriberFactures />} />
          <Route path="actionsSolidaires" element={<Actus />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
