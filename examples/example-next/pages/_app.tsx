import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { withEvolvSSR, withEvolv } from '@evolv-delivery-tools/react';

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

// use `withEvolvSSR` HOC for server side rendering
export default withEvolv({
  environmentId: process.env.NEXT_PUBLIC_EVOLV_ENVIROMENT || '',
  generateUid: true
})(MyApp);
