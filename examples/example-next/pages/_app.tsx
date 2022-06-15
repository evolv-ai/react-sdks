import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { EvolvProvider, EvolvClient } from '@evolv/react';

export default function MyApp(props: any) {
  // console.log('props', props.loadedState);
  const { Component, pageProps, props: appProps } = props;
  const TemplateComponent = Component.Template || React.Fragment

  const [evolvClient] = React.useState(() => new EvolvClient({
    environmentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || '',
    userId: '289371892738921738912',
    sessionId: '893748973894723894',
    isServer: false,
    initialState: props.loadedState || {}
  }));

  return (
    <EvolvProvider client={evolvClient}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TemplateComponent>
        <Component {...pageProps} />
      </TemplateComponent>
    </EvolvProvider>
  );
}

MyApp.getInitialProps = async (appContext: any): Promise<any> => {
  const clientInstance: any = await (async () => {
      const client = new EvolvClient({
        environmentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || '',
        userId: '289371892738921738912',
        sessionId: '893748973894723894',
        isServer: true
      });
      const keys = await client.getKeys();
      return client;
  })();

  return { loadedState: clientInstance.evolvState };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
  client: PropTypes.any
};
