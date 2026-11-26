import { IoClose } from 'react-icons/io5';
import css from './EmptyState.module.css';

export default function EmptyState() {
  return (
    <div className={css.empty}>
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>We couldn’t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className={css.actions}>
        <button type="reset" form="filters" className="btn btn-outline">
          <IoClose size={20} aria-hidden="true"/>
          Clear filters
        </button>
        <button type="reset" form="filters" className="btn btn-primary">
          View all campers
        </button>
      </div>
    </div>
  )
}