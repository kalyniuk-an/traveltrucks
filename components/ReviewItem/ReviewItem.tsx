import StarRating from '@/components/StarRating/StarRating';
import css from './ReviewItem.module.css';

interface ReviewItemProps {
  name: string;
  rating: number;
  comment: string;
}

export default function ReviewItem({ name, rating, comment }: ReviewItemProps) {
  return (
    <article className={css.review}>
      <div className={css.header}>
        <span className={css.avatar} aria-hidden="true">
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <h3 className={css.name}>{name}</h3>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </article>
  );
}