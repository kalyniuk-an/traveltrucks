import { create } from 'zustand';
import type { CamperFilters } from '@/types/filters';

interface FiltersStore {
  filters: CamperFilters;
  setFilters: (filters: CamperFilters) => void;
  resetFilters: () => void;
}

const initialFilters: CamperFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

export const useFiltersStore = create<FiltersStore>()(set => ({
  filters: initialFilters,
  setFilters: filters => set({ filters }),
  resetFilters: () => set({ filters: initialFilters }),
}));
