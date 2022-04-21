import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { EvolvProvider } from '@evolv-delivery-tools/react';
import { EvolvClient } from '@evolv-delivery-tools/client';
import { useState, useEffect } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props: any) {
  const { Component, pageProps, props: appProps } = props;
  const TemplateComponent = Component.Template || React.Fragment

  // in a create-react-app you can create the client outside of the render, see https://react-query.tanstack.com/overview
  const [client, setClient] = useState<EvolvClient | undefined>(undefined);
  useEffect(() => {
    const clientInstance = new EvolvClient({ enviromentId: 'f5ad6d7f75', useSessions: true });
    clientInstance.fetchGroups(['movies']).then(() => { setClient(clientInstance) });
  }, []);

  return (
    <EvolvProvider client={client}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TemplateComponent>
        <Component {...pageProps} />
      </TemplateComponent>
    </EvolvProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
