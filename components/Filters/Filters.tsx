'use client';

import { BsMap } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { formatLabel } from '@/lib/utils';
import type { FiltersResponse } from '@/types/camper';
import { useFiltersStore } from '@/lib/store/filtersStore';
import css from './Filters.module.css';

interface FiltersProps {
  options: FiltersResponse;
}

export default function Filters({options}: FiltersProps) {
  const filters = useFiltersStore(state => state.filters);
  const setFilters = useFiltersStore(state => state.setFilters);
  const resetFilters = useFiltersStore(state => state.resetFilters);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setFilters({
      location: String(data.get('location') ?? '').trim(),
      form: String(data.get('form') ?? ''),
      engine: String(data.get('engine') ?? ''),
      transmission: String(data.get('transmission') ?? ''),
    });
  };

  return (
    <form id="filters" className={css.filters} onSubmit={handleSubmit} onReset={resetFilters}>
      <div>
        <label htmlFor="location" className={css.label}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <BsMap className={css.inputIcon} aria-hidden="true" />
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            defaultValue={filters.location}
            className={css.input}
          />
        </div>
      </div>

      <h2 className={css.title}>Filters</h2>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Camper form</legend>
        {options.forms.map((form) => (
          <label key={form} className={css.radio}>
            <input
              type="radio"
              name="form"
              value={form}
              defaultChecked={filters.form === form}
              className={css.radioInput}
            />
            {formatLabel(form)}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Engine</legend>
        {options.engines.map((engine) => (
          <label key={engine} className={css.radio}>
            <input
              type="radio"
              name="engine"
              value={engine}
              defaultChecked={filters.engine === engine}
              className={css.radioInput}
            />
            {formatLabel(engine)}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Transmission</legend>
        {options.transmissions.map((transmission) => (
          <label key={transmission} className={css.radio}>
            <input
              type="radio"
              name="transmission"
              value={transmission}
              defaultChecked={filters.transmission === transmission}
              className={css.radioInput}
            />
            {formatLabel(transmission)}
          </label>
        ))}
      </fieldset>

      <div className={css.actions}>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button type="reset" className="btn btn-outline">
          <IoClose size={20} aria-hidden="true" />
          Clear filters
        </button>
      </div>
    </form>
  );
}
