import React, { useContext, useState } from 'react';
import { TableFilters } from '../context/ProviderFilters';

function Filters() {
  const { nameFilter,
    setNameFilter,
    combineFilters,
    setCombineFilters,
    columnFilter,
    setColumnFilter,
  } = useContext(TableFilters);

  const [filterInicial, setFilterInicial] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  // filter by name
  const filterChangeName = (name) => setNameFilter(name.target.value);

  // filter by numeric values
  const filters = ({ target: { name, value } }) => {
    setFilterInicial({ ...filterInicial, [name]: value });
  };

  // button filter
  const buttonFilter = () => {
    setCombineFilters([...combineFilters, filterInicial]);
    const filter = columnFilter.filter((item) => item !== filterInicial.column);
    setColumnFilter(filter);
    setFilterInicial({
      ...filterInicial,
      column: filter[0],
    });
  };

  // button remove filter

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ filterChangeName }
      />

      <select
        name="column"
        data-testid="column-filter"
        value={ filterInicial.column }
        onChange={ filters }
      >
        { columnFilter.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        )) }
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ filterInicial.comparison }
        onChange={ filters }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ filterInicial.value }
        onChange={ filters }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonFilter }
      >
        Filtrar

      </button>
    </div>
  );
}

export default Filters;
