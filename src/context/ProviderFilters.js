import { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const TableFilters = createContext();

function AllFilters({ children }) {
  const [nameFilter, setNameFilter] = useState('');

  const context = {
    nameFilter,
    setNameFilter,
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
