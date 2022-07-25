import * as React from 'react';
import { EvolvClient, EvolvClientOptions, EvolvProvider } from '../';

export function withEvolvServer<T>(
  options: EvolvClientOptions
): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T> {
  return function withEvolvServerHoc(WrappedComponent: React.ComponentType<T>): React.ComponentType<T> {
    class WithEvolvServer extends React.Component<T> {
      static async getInitialProps(ctx: any) {
        const clientInstance: any = await (async () => {
          const client = new EvolvClient({
            ...options,
            isServer: true,
            serverContext: ctx
          });
          await client.getKeys();
          return client;
        })();

        let componentProps = {};
        if (WrappedComponent.getInitialProps) {
          componentProps = await WrappedComponent.getInitialProps(ctx);
        }

        return {
          loadedState: clientInstance.evolvState,
          ...componentProps
        };
      }

      render() {
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }

    return WithEvolvServer;
  };
}

export function withEvolvSSR<T>(
  options: EvolvClientOptions
): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T> {
  return function withEvolvSSRHoc(WrappedComponent: React.ComponentType<T>): React.ComponentType<T> {
      function WithEvolvClientSSR(props: any): any {
        const [evolvClient] = React.useState(() => new EvolvClient({
          ...options,
          initialState: props.loadedState || {}
        }));

        return (
          <EvolvProvider client={evolvClient as any}>
            <WrappedComponent {...props} />
          </EvolvProvider>
        );
    };
    return withEvolvServer<T>(options)(WithEvolvClientSSR as React.ComponentType<T>);
  }
}

export function withEvolv<T>(
  options: EvolvClientOptions
): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T> {
  return function withEvolvHoc(WrappedComponent: React.ComponentType<T>): React.ComponentType<T> {
      function WithEvolv(props: any): any {
        const [evolvClient] = React.useState(() => new EvolvClient({
          ...options,
          initialState: props.loadedState || {}
        }));

        return (
          <EvolvProvider client={evolvClient as any}>
            <WrappedComponent {...props} />
          </EvolvProvider>
        );
    };
    return WithEvolv as React.ComponentType<T>;
  }
}
