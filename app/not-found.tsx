import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="status-page">
      <h1 className="status-title">Page not found</h1>
      <p className="status-text">The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Go home
      </Link>
    </section>
  );
}
