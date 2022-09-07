import { EvolvClientOptions, EvolvProvider } from '@evolv/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { getUid } from './utils/uid';


const rootElement = document.getElementById('root');

const options: EvolvClientOptions = JSON.parse(process.env.REACT_APP_EVOLV_CONFIG ?? '{}');

const remoteContext = {
	customizeButton: false
};

const uid = getUid();

ReactDOM.render(
	<StrictMode>
		<EvolvProvider options={options} uid={uid} remoteContext={remoteContext}>
			<App />
		</EvolvProvider>
	</StrictMode>
	, rootElement
);
