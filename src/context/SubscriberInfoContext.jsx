import React, { createContext, useState } from 'react';

const SubscriberInfoContext = createContext({
  decodedToken: {},
  subscriberInfo: {},
  recipientsInfo: [],
  setDecodedToken: () => {},
  setSubscriberInfo: () => {},
  setRecipientsInfo: () => {},
});

export const SubscriberInfoContextProvider = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState({});
  const [subscriberInfo, setSubscriberInfo] = useState({});
  const [recipientsInfo, setRecipientsInfo] = useState([]);

  return (
    <SubscriberInfoContext.Provider
      value={{
        decodedToken,
        subscriberInfo,
        recipientsInfo,
        setDecodedToken,
        setSubscriberInfo,
        setRecipientsInfo,
      }}
    >
      {children}
    </SubscriberInfoContext.Provider>
  );
};

export default SubscriberInfoContext;
