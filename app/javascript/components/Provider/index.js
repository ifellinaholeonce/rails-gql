import React from 'react';
import { ApolloProvier } from 'react-apollo';
import { createCache, createClient } from '../../utls/apollo';

export default ({ children }) => (
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
};
