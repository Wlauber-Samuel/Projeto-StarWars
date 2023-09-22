import React, { useContext } from 'react';
import { ProviderTable } from '../context/ProviderTable';
import { TableFilters } from '../context/ProviderFilters';

function Table() {
  const { planets } = useContext(ProviderTable);
  const { nameFilter, combineFilters } = useContext(TableFilters);

  let filter = planets;
  console.log('planetas:', filter);
  combineFilters.forEach((filterBy) => {
    const { column, comparison, value } = filterBy;
    if (comparison === 'maior que') {
      filter = filter.filter((planet) => Number(planet[column]) > Number(value));
      return filter;
    }
    if (comparison === 'menor que') {
      filter = filter.filter((planet) => Number(planet[column]) < Number(value));
      return filter;
    }

    filter = filter.filter((planet) => Number(planet[column]) === Number(value));
    return filter;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filter
            .filter((planet) => planet.name.includes(nameFilter))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
