import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';
import mockPlanet from './utils/mock';

describe('Testando o componente <App />', () => {
  beforeEach(() => {
    global.fetch = jest.fn(async() => Promise.resolve({
      json: async () => Promise.resolve(mockPlanet)
    }))
  });
  it('Verifica se a página renderiza todos os elementos corretamente', async () => {
    await act(async () => {
      render(<App />);
    });

      act(() => {
      const select = screen.getByTestId('column-filter');
      fireEvent.change(select, { target: { value: 'population' } });

      const selectComparison = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison, { target: { value: 'maior que' } });

      const inputNumber = screen.getByTestId('value-filter');
      fireEvent.change(inputNumber, { target: { value: '100000' } });

      const button = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button);
    });

    act(() => {
      const select = screen.getByTestId('column-filter');
      fireEvent.change(select, { target: { value: 'orbital_period' } });

      const selectComparison = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison, { target: { value: 'menor que' } });

      const button = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button);
    });

    act(() => {
      const select = screen.getByTestId('column-filter');
      fireEvent.change(select, { target: { value: 'surface_water' } });

      const selectComparison = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison, { target: { value: 'igual a' } });

      const button = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button);
    });

    const allButtons = screen.getAllByRole('button');
    act(() => {
      fireEvent.click(allButtons[1]);
    });

    const allButtons2 = screen.getAllByRole('button');
    act(() => {
      fireEvent.click(allButtons2[3]);
    });

    //filtros combinados
  });
  test('teste de filtros combinados', async () => {
    render(<App />);
    // first filter
    const select = screen.getByTestId('column-filter');
    fireEvent.change(select, { target: { value: 'population' } });

    const selectComparison = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison, { target: { value: 'maior que' } });

    const inputNumber = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber, { target: { value: '100000' } });

    const button = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button);

    expect(await screen.findByText('Coruscant')).toBeInTheDocument();
    
    const tableRow = screen.getAllByRole('row');
    expect(tableRow.length).toBe(8);
    
    // second filter
    const select2 = screen.getByTestId('column-filter');
    fireEvent.change(select2, { target: { value: 'orbital_period' } });

    const selectComparison2 = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison2, { target: { value: 'menor que' } });

    const inputNumber2 = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber2, { target: { value: '400' } });

    const button2 = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button2);

    expect(await screen.findByText('Coruscant')).toBeInTheDocument();
    
    const tableRow2 = screen.getAllByRole('row');
    expect(tableRow2.length).toBe(5);
    
    // third filter
    const select3 = screen.getByTestId('column-filter');
    fireEvent.change(select3, { target: { value: 'surface_water' } });

    const selectComparison3 = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison3, { target: { value: 'igual a' } });

    const inputNumber3 = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber3, { target: { value: '12' } });

    const button3 = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button3);

    expect(await screen.findByText('Naboo')).toBeInTheDocument();

    const tableRow3 = screen.getAllByRole('row');
    expect(tableRow3.length).toBe(2);
  });

  test('Validação de dropdown', async () =>  {
    render(<App />);

    const select = screen.getByTestId('column-filter');
    fireEvent.change(select, { target: { value: 'population' } });

    const selectComparison = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison, { target: { value: 'igual a' } });

    const inputNumber = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber, { target: { value: '200000' } });

    const button = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button);

    expect(await screen.findByText('Tatooine')).toBeInTheDocument();
    expect(select).not.toContainHTML('population');

  });
});