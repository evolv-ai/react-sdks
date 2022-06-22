import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { withEvolvSSR, withEvolv, EvolvClientOptions } from '@evolv/react';

const evolvConfig: EvolvClientOptions = {
  environmentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || '',
  userId: '289371892738921738912'
};

function MyApp(props: any) {
  const { Component, pageProps, props: appProps } = props;
  const TemplateComponent = Component.Template || React.Fragment;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TemplateComponent>
        <Component {...pageProps} />
      </TemplateComponent>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
  client: PropTypes.any
};

export default withEvolvSSR({
  environmentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || '',
  userId: '289371892738921738912'
})(MyApp);
