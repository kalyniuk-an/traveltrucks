import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { formatLocation } from '@/lib/utils';
import css from './CamperMeta.module.css';

interface CamperMetaProps {
  rating: number;
  totalReviews: number;
  location: string;
}

export default function CamperMeta({ rating, totalReviews, location }: CamperMetaProps) {
  return (
    <div className={css.meta}>
      <p className={css.item}>
        <FaStar className={css.star} aria-hidden="true" />
        {rating}({totalReviews} Reviews)
      </p>
      <p className={css.item}>
        <BsMap className={css.icon} aria-hidden="true" />
        {formatLocation(location)}
      </p>
    </div>
  );
}