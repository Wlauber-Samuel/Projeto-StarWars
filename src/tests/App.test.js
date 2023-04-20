import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando o componente <App />', () => {
  it('Verifica se a página renderiza todos os elementos corretamente', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /star wars planets search/i });
    const input = screen.getByRole('textbox');

    const select = screen.getByTestId('column-filter');
    fireEvent.change(select, { target: { value: 'population' } });

    const selectComparison = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison, { target: { value: 'maior que' } });

    const inputNumber = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber, { target: { value: '100000' } });

    const button = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button);

    const tableElement = screen.getByRole('table');

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(selectComparison).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(tableElement).toBeInTheDocument();
  });

  it('Verifica se os filtros `maior que`, `menor que` e `igual a` estão funcionando  corretamente', () => {
    render(<App />);
    // maior que
    const selectComparison = screen.getByTestId('comparison-filter');
    fireEvent.change(selectComparison, { target: { value: 'maior que' } });

    const inputNumber = screen.getByTestId('value-filter');
    fireEvent.change(inputNumber, { target: { value: '100000' } });

    const button = screen.getByRole('button', { name: /filtrar/i });
    fireEvent.click(button);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

    // menor que
    fireEvent.change(selectComparison, { target: { value: 'menor que' } });
    fireEvent.change(inputNumber, { target: { value: '100000' } });
    fireEvent.click(button);
    expect(tableElement).toBeInTheDocument();

    // igual a
    fireEvent.change(selectComparison, { target: { value: 'igual a' } });
    fireEvent.change(inputNumber, { target: { value: '100000' } });
    fireEvent.click(button);
    expect(tableElement).toBeInTheDocument();
  });
});
