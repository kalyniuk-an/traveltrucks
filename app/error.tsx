'use client';

import css from './not-found.module.css';

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>Something went wrong</h1>
      <p className={css.text}>Please try again later.</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
