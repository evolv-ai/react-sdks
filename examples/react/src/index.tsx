import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EvolvProvider, EvolvClientOptions } from "@evolv/react";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const options: EvolvClientOptions = {
  environment: "a925240014"
};

const remoteContext = {
  customizeButton: false
};

const uid = '1234.567';

root.render(
  <React.StrictMode>
    <EvolvProvider options={options} uid={uid} remoteContext={remoteContext}>
      <App/>
    </EvolvProvider>
  </React.StrictMode>
);
