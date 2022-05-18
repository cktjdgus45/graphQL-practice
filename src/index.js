import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { ApolloProvider } from '@apollo/client';
import client from './apollo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

);

