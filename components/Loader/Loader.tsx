import css from './Loader.module.css';

interface LoaderProps {
  title?: string;
  text?: string;
}

export default function Loader({
  title = 'Loading tracks...',
  text = 'Please wait while we fetch the best travel trucks for you',
}: LoaderProps) {
  return (
    <div className={css.backdrop} role="status" aria-live="polite">
      <div className={css.card}>
        <span className={css.spinner} aria-hidden="true" />
        <div>
          <p className={css.title}>{title}</p>
          <p className={css.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}
