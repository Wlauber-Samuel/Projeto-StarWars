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

    //filtros combinados
    act(() => {
      // first filter
      const select = screen.getByTestId('column-filter');
      fireEvent.change(select, { target: { value: 'population' } });

      const selectComparison = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison, { target: { value: 'maior que' } });

      const inputNumber = screen.getByTestId('value-filter');
      fireEvent.change(inputNumber, { target: { value: '100000' } });

      const button = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button);

      // second filter
      const select2 = screen.getByTestId('column-filter');
      fireEvent.change(select2, { target: { value: 'orbital_period' } });

      const selectComparison2 = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison2, { target: { value: 'menor que' } });

      const inputNumber2 = screen.getByTestId('value-filter');
      fireEvent.change(inputNumber2, { target: { value: '400' } });

      const button2 = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button2);

      // third filter
      const select3 = screen.getByTestId('column-filter');
      fireEvent.change(select3, { target: { value: 'surface_water' } });

      const selectComparison3 = screen.getByTestId('comparison-filter');
      fireEvent.change(selectComparison3, { target: { value: 'igual a' } });

      const inputNumber3 = screen.getByTestId('value-filter');
      fireEvent.change(inputNumber3, { target: { value: '12' } });

      const button3 = screen.getByRole('button', { name: /filtrar/i });
      fireEvent.click(button3);
    });
  });
});
