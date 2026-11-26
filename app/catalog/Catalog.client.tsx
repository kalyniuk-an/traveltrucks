'use client';

import { useState } from 'react';
import Filters from '@/components/Filters/Filters';
import EmptyState from '@/components/EmptyState/EmptyState';
import type { CamperFilters } from '@/types/filters';
import css from './page.module.css';

const initialFilters: CamperFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

export default function CatalogClient() {
  const [filters, setFilters] = useState<CamperFilters>(initialFilters);

  return (
    <section className={`container ${css.catalog}`}>
      <h1 className="visually-hidden">Campers catalog</h1>

      <Filters onSearch={setFilters} onClear={() => setFilters(initialFilters)} />

      <div className={css.list}>
        {/* Тимчасово: перевіряємо, що фільтри працюють */}
        {/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
        <EmptyState/>
      </div>
    </section>
  );
}
