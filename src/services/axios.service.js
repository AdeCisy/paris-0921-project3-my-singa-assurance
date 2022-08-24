import axios from 'axios';
import jwt from 'jwt-decode';

const URL = 'http://localhost:8080';

export const createSubscriberAccount = async (data) => {
  const subscriberCreated = await axios.post(`${URL}/auth/register`, data);
  return subscriberCreated;
};

export const logIn = async (data) => {
  try {
    const result = await axios.post(`${URL}/auth/login`, data);
    localStorage.setItem('x-access-token', result.data);
    const decoded = jwt(localStorage.getItem('x-access-token'));
    return { error: false, data: decoded.data };
  } catch (err) {
    if (err.response.status === 401) return { error: true, message: `Email ou mot de passe incorrect` };
  }
};

export const checkEmail = async (email) => {
  const existingEmail = await axios.get(`${URL}/auth/verify/${email}`);
  if (existingEmail.status === 200) return true;
  else return false;
};

export const getSubscriberInfo = async (id) => {
  const subscriber = await axios.get(`${URL}/subscribers/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('x-access-token')}`,
    },
  });
  return subscriber;
};

export const createRecipient = async (data) => {
  const recipient = await axios.post(`${URL}/recipients`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('x-access-token')}`,
    },
  });
  return recipient;
};

export const getRecipients = async (id) => {
  const recipients = await axios.get(`${URL}/recipients/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('x-access-token')}`,
    },
  });
  return recipients;
};

export const getOptionsInfo = async () => {
  const optionsInfo = await axios.get(`${URL}/options`);
  return optionsInfo;
};
