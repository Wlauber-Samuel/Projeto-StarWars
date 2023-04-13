import { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const TableFilters = createContext();

function AllFilters({ children }) {
  const [nameFilter, setNameFilter] = useState(''); // filtro de nome
  const [numericFilter, setNumericFilter] = useState([]);
  const [combineFilters, setCombineFilters] = useState([]); // array de filtros numéricos combinados adicionados pelo usuário (ex: population, orbital_period, diameter, rotation_period, surface_water)

  const context = {
    nameFilter,
    setNameFilter,
    numericFilter,
    setNumericFilter,
    combineFilters,
    setCombineFilters,
  };

  return (
    <TableFilters.Provider value={ context }>
      { children }
    </TableFilters.Provider>
  );
}
AllFilters.propTypes = {
  children: propTypes.node.isRequired,
};

export default AllFilters;
