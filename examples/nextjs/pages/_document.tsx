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
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
				      rel="stylesheet"
				      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
				      crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
