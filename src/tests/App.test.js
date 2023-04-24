import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';

describe('Testando o componente <App />', () => {
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
  });
});
