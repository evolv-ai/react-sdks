import { EvolvClientOptions, EvolvCoexistenceMode } from '@evolv/nextjs';
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


const options: EvolvClientOptions = JSON.parse(process.env.NEXT_PUBLIC_EVOLV_CONFIG ?? '{}');

export default function Document() {
	return (
		<Html>
			<Head>
				<EvolvCoexistenceMode />
				<script
					src="https://media.evolv.ai/asset-manager/releases/latest/webloader.js"
					{...(options.environment ? { 'data-evolv-environment': options.environment } : {})}
					{...(options.endpoint ? { 'data-evolv-endpoint': options.endpoint } : {})}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
