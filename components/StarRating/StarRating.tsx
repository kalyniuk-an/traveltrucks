import { FaStar } from 'react-icons/fa';
import css from './StarRating.module.css';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const filledStars = Math.round(rating);

  return (
    <div className={css.stars} role="img" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < filledStars ? css.filled : css.empty}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}