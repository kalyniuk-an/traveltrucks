'use client';

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { fetchCampers } from '@/lib/api';
import CamperCard from '../CamperCard/CamperCard';
import EmptyState from '@/components/EmptyState/EmptyState';
import Loader from '@/components/Loader/Loader';
import css from './CampersList.module.css';

export default function CampersList() {
  const filters = useFiltersStore((state) => state.filters);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
    isError,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: ({ pageParam }) => fetchCampers(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    placeholderData: keepPreviousData,
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isError) {
    return (
      <div className={css.error}>
        <p>Failed to load campers. Please try again.</p>
        <button type="button" className="btn btn-primary" onClick={() => refetch()}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      {isFetching && <Loader />}

      {!isPending && campers.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className={css.list}>
          {campers.map((camper, index) => (
            <li key={camper.id}>
              <CamperCard camper={camper} isFirst={index===0} />
            </li>
          ))}
        </ul>
      )}

      {hasNextPage && (
        <button
          type="button"
          className={`btn btn-outline ${css.loadMore}`}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          Load more
        </button>
      )}
    </>
  );
}