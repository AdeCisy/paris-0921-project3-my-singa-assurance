import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ActusPage from './pages/ActusPage';
import ConceptPage from './pages/ConceptPage';
import OfferPage from './pages/OfferPage';
import Offer from './offer/Offer';
import OfferRate from './offer/OfferRate';
import RecipientLocation from './offer/RecipientLocation';
import Actus from './components/Actus';
import SubscriberPage from './pages/SubscriberPage';
import SubscriberDetails from './subscriber/SubscriberDetails';
import SubscriberWelcomePage from './subscriber/SubscriberWelcomePage';
import SubscriberHasRecipients from './subscriber/SubscriberHasRecipients';
import SubscriberOneRecipient from './subscriber/SubscriberOneRecipient';
import Contact from './components/ContactPage';
import FormPage from './pages/FormPage';
import FormSignUpStep1 from './formSignUp/FormSignUpStep1';
import FormSignUpStep2 from './formSignUp/FormSignUpStep2';
import SubscriberFactures from './subscriber/SubscriberFactures';
import SubscriberContrats from './subscriber/SubscriberContrats';
import FormSignUpAddRecipients from './formSignUp/FormSignUpAddRecipients';
import SubscriberRecipientHome from './subscriber/SubscriberRecipientHome';

import AuthenticationContext from './context/AuthenticationContext';

import './App.css';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { isLogIn } = useContext(AuthenticationContext);
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/actus" element={<ActusPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormPage />}>
          <Route path="step1" element={<FormSignUpStep1 />} />
          <Route path="step2" element={<FormSignUpStep2 />} />
          <Route path="step3" element={<FormSignUpAddRecipients />} />
        </Route>
        <Route path="/offer" element={<OfferPage />}>
          <Route path="offer" element={<Offer />} />
          <Route path="recipientLocation" element={<RecipientLocation />} />
          <Route path="rates" element={<OfferRate />} />
        </Route>
        <Route path="/subscribers" element={isLogIn ? <SubscriberPage /> : <Navigate to="/login" />}>
          <Route path="subscriberDetails" element={<SubscriberDetails />} />
          <Route path="welcome" element={<SubscriberWelcomePage />} />
          <Route path="recipient" element={<SubscriberRecipientHome />}>
            <Route path="" element={<SubscriberHasRecipients />} />
            <Route path="recipientdetails" element={<SubscriberOneRecipient />} />
          </Route>
          <Route path="factures" element={<SubscriberFactures />} />
          <Route path="contrats" element={<SubscriberContrats />} />
          <Route path="actionsSolidaires" element={<Actus />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
