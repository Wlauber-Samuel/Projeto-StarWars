import React, { useContext } from 'react';
import { TableFilters } from '../context/ProviderFilters';

function Filters() {
  const { nameFilter, setNameFilter } = useContext(TableFilters);

  const filterChangeName = (name) => setNameFilter(name.target.value);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ filterChangeName }
      />
    </div>
  );
}

export default Filters;
