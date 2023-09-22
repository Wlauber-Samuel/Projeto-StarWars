import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ProviderTable = createContext();

function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      data.results.forEach((planetList) => {
        delete planetList.residents;
      });
      setPlanets(data.results);
    };
    fetchData();
  }, []);

  const context = {
    planets,
    setPlanets,
  };

  return (
    <ProviderTable.Provider value={ context }>
      {children}
    </ProviderTable.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
