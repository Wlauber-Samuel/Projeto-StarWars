import React from 'react';
import Table from './Components/Table';
import TableProvider from './context/ProviderTable';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
