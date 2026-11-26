'use client';

import { BsMap } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { CAMPER_FORMS, ENGINES, TRANSMISSIONS } from '@/constants/filters';
import type { CamperFilters } from '@/types/filters';
import css from './Filters.module.css';

interface FiltersProps {
  onSearch: (filters: CamperFilters) => void;
  onClear: () => void;
}

export default function Filters({ onSearch, onClear }: FiltersProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    onSearch({
      location: String(data.get('location') ?? '').trim(),
      form: String(data.get('form') ?? ''),
      engine: String(data.get('engine') ?? ''),
      transmission: String(data.get('transmission') ?? ''),
    });
  };

  return (
    <form id="filters" className={css.filters} onSubmit={handleSubmit} onReset={onClear}>
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
            className={css.input}
          />
        </div>
      </div>

      <h2 className={css.title}>Filters</h2>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Camper form</legend>
        {CAMPER_FORMS.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input type="radio" name="form" value={value} className={css.radioInput} />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Engine</legend>
        {ENGINES.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input type="radio" name="engine" value={value} className={css.radioInput} />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.groupTitle}>Transmission</legend>
        {TRANSMISSIONS.map(({ label, value }) => (
          <label key={value} className={css.radio}>
            <input type="radio" name="transmission" value={value} className={css.radioInput} />
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
