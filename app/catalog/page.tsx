import type { Metadata } from 'next';
import Filters from '@/components/Filters/Filters';
import css from './page.module.css';
import CampersList from '@/components/CampersList/CampersList';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Browse and filter campers by location, body type, engine and transmission.',
};

export default function CatalogPage() {
  return (
    <section className={`container ${css.catalog}`}>
      <h1 className="visually-hidden">Campers catalog</h1>
      <Filters />
      <div className={css.list}>
        <CampersList/>
      </div>
    </section>
  );
}
