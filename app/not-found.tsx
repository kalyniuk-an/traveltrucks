import type { Metadata } from 'next';
import Link from 'next/link';
import css from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>Page not found</h1>
      <p className={css.text}>The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Go home
      </Link>
    </section>
  );
}
