'use client';

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <section className="status-page">
      <h1 className="status-title">Something went wrong</h1>
      <p className="status-text">Please try again later.</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
