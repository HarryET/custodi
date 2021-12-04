import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix';
import type { LinksFunction } from 'remix';
import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: '/_internal/tailwindcss' }];

export function loader() {
  return {
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  };
}

export default function App() {
  const data = useLoaderData();
  const supabase = createClient(data.ENV.SUPABASE_URL!, data.ENV.SUPABASE_ANON_KEY!)

  return (
    <Document>
      <Provider value={supabase}>
        <Outlet />
      </Provider>
    </Document>
  );
}

// TODO create custom error pages!
// https://remix.run/docs/en/v1/api/conventions#errorboundary
export var ErrorBoundary = function ({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
    </Document>
  );
};

// TODO create custom error pages!
// https://remix.run/docs/en/v1/api/conventions#catchboundary
export var CatchBoundary = function () {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}
        :
        {caught.statusText}
      </h1>
      {message}
    </Document>
  );
};

var Document = function ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};
