import { EvolvClientOptions } from '@evolv/client';
import { EvolvProvider } from '@evolv/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');

const options: EvolvClientOptions = {
	environment: 'df7109b048',
	endpoint: 'https://participants-newdev.evolvdev.com/'
};

const remoteContext = {
	customizeButton: false
} as any;



ReactDOM.render(
	<StrictMode>
		<EvolvProvider options={options} uid="12345678908" remoteContext={remoteContext}>
			<App />
		</EvolvProvider>
	</StrictMode>
	, rootElement
);
