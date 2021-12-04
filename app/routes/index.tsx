import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
  title: 'Remix Starter',
  description: 'Welcome to remix!',
});

export default function Index() {
  return (
    <div />
  );
}
