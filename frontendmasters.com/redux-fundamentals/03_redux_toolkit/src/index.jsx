import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { Theme } from '@twilio-paste/core/theme';

import Application from './components/Application';
import { store } from './store';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
);
