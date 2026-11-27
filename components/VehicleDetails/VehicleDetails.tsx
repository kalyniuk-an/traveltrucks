import Badge from '@/components/Badge/Badge';
import css from './VehicleDetails.module.css';

interface VehicleDetailsProps {
  features: string[];
  details: { label: string; value: string }[];
}

export default function VehicleDetails({ features, details }: VehicleDetailsProps) {
  return (
    <>
      <h2 className={css.title}>Vehicle details</h2>

      <ul className={css.badges}>
        {features.map((feature) => (
          <li key={feature}>
            <Badge label={feature} />
          </li>
        ))}
      </ul>

      <dl className={css.list}>
        {details.map(({ label, value }) => (
          <div key={label} className={css.row}>
            <dt>{label}</dt>
            <dd className={css.value}>{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}