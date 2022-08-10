import Head from 'next/head'
import { withEvolvSSR } from '@evolv-delivery-tools/react';

import Button from './button';
import Heading from './heading';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Evolv AI / NextJS Example</title>
      </Head>

      <main>
        <Heading />
        <Button />
      </main>
    </div>
  )
}

// use `withEvolvSSR` HOC for server side rendering, `withEvolv` for client side
export default withEvolvSSR({
  environmentId: 'f5ad6d7f75',
  generateUid: true
})(Home);