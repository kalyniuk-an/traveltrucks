'use client';

import { useFiltersStore } from '@/lib/store/filtersStore';
import EmptyState from '../EmptyState/EmptyState';

export default function CampersList() {
  const filters = useFiltersStore((state) => state.filters);

  // TODO: коли буде API — useInfiniteQuery з filters у queryKey
  return (
    <>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
      <EmptyState />
    </>
  )
}