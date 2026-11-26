'use client';

import { BsMap } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { CAMPER_FORMS, ENGINES, TRANSMISSIONS } from '@/constants/filters';
import { useFiltersStore } from '@/lib/store/filtersStore';
import css from './Filters.module.css';

export default function Filters() {
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
        {CAMPER_FORMS.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input
              type="radio"
              name="form"
              value={value}
              defaultChecked={filters.form === value}
              className={css.radioInput}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Engine</legend>
        {ENGINES.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input
              type="radio"
              name="engine"
              value={value}
              defaultChecked={filters.engine === value}
              className={css.radioInput}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Transmission</legend>
        {TRANSMISSIONS.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input type="radio" name="transmission" value={value} defaultChecked={filters.transmission === value} className={css.radioInput} />
            {label}
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
