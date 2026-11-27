import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import axios from 'axios';
import { fetchCamperById, fetchReviews } from '@/lib/api';
import { formatLabel, formatUnit, getLabel } from '@/lib/utils';
import { AMENITIES } from '@/constants/amenities';
import Gallery from '@/components/Gallery/Gallery';
import CamperMeta from '@/components/CamperMeta/CamperMeta';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import ReviewItem from '@/components/ReviewItem/ReviewItem';
import BookingForm from '@/components/BookingForm/BookingForm';
import css from './page.module.css';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

const getCamper = cache(async (camperId: string) => {
  try {
    return await fetchCamperById(camperId);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }
});

export async function generateMetadata({ params }: CamperPageProps): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamper(camperId);

  return {
    title: camper.name,
    description: camper.description,
  };
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;
  const camper = await getCamper(camperId);
  const reviews = await fetchReviews(camperId).catch(() => []);

  const features = [
    formatLabel(camper.transmission),
    formatLabel(camper.engine),
    ...camper.amenities.map((amenity) => getLabel(AMENITIES, amenity)),
    formatLabel(camper.form),
  ];

  const details = [
    { label: 'Form', value: formatLabel(camper.form) },
    { label: 'Length', value: formatUnit(camper.length) },
    { label: 'Width', value: formatUnit(camper.width) },
    { label: 'Height', value: formatUnit(camper.height) },
    { label: 'Tank', value: formatUnit(camper.tank) },
    { label: 'Consumption', value: formatUnit(camper.consumption) },
  ];

  return (
    <div className={`container ${css.page}`}>
      <section className={css.top}>
        <Gallery images={camper.gallery} alt={camper.name} />

        <div className={css.info}>
          <div className={css.card}>
            <h1 className={css.name}>{camper.name}</h1>
            <CamperMeta
              rating={camper.rating}
              totalReviews={camper.totalReviews}
              location={camper.location}
            />
            <p className={css.price}>€{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </div>

          <div className={css.card}>
            <VehicleDetails features={features} details={details} />
          </div>
        </div>
      </section>

      <section className={css.bottom}>
        <h2 className={css.reviewsTitle}>Reviews</h2>
        <div className={css.bottomGrid}>
          {reviews.length > 0 ? (
            <ul className={css.reviews}>
              {reviews.map((review) => (
                <li key={review.id}>
                  <ReviewItem
                    name={review.reviewer_name}
                    rating={review.reviewer_rating}
                    comment={review.comment}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.noReviews}>No reviews yet.</p>
          )}
          <BookingForm camperId={camperId} />
        </div>
      </section>
    </div>
  );
}