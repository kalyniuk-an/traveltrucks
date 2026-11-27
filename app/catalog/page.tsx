import type { Metadata } from 'next';
import CampersList from '@/components/CampersList/CampersList';
import Filters from '@/components/Filters/Filters';
import { fetchFilters } from '@/lib/api';
import css from './page.module.css';


export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Browse and filter campers by location, body type, engine and transmission.',
};

export default async function CatalogPage() {
  const filterOption = await fetchFilters();

  return (
    <section className={`container ${css.catalog}`}>
      <h1 className="visually-hidden">Campers catalog</h1>
      <Filters options={ filterOption} />
      <div className={css.list}>
        <CampersList/>
      </div>
    </section>
  );
}
