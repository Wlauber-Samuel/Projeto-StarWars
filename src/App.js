import React from 'react';
import Table from './Components/Table';
import TableProvider from './context/ProviderTable';
import Filters from './Components/Filters';
import ProviderFilters from './context/ProviderFilters';

function App() {
  return (
    <>
      <h1>Star Wars Planets Search</h1>
      <ProviderFilters>
        <TableProvider>
          <Filters />
          <Table />
        </TableProvider>
      </ProviderFilters>

    </>
  );
}

export default App;
