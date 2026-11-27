import Image from 'next/image';
import Link from 'next/link';
import { BsFuelPump, BsDiagram3, BsCarFront } from 'react-icons/bs';
import CamperMeta from '@/components/CamperMeta/CamperMeta';
import Badge from '@/components/Badge/Badge';
import { formatLabel } from '@/lib/utils';
import type { CamperListItem } from '@/types/camper';
import css from './CamperCard.module.css';

interface CamperCardProps {
  camper: CamperListItem;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const { id, name, price, rating, totalReviews, location, description, coverImage } = camper;

  return (
    <article className={css.card}>
      <Image src={coverImage} alt={name} width={224} height={240} className={css.image} />

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.price}>€{price}</p>
        </div>

        <CamperMeta rating={rating} totalReviews={totalReviews} location={location} />

        <p className={css.description}>{description}</p>

        <ul className={css.badges}>
          <li>
            <Badge label={formatLabel(camper.engine)} icon={BsFuelPump} />
          </li>
          <li>
            <Badge label={formatLabel(camper.transmission)} icon={BsDiagram3} />
          </li>
          <li>
            <Badge label={formatLabel(camper.form)} icon={BsCarFront} />
          </li>
        </ul>

        <Link
          href={`/catalog/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${css.button}`}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}