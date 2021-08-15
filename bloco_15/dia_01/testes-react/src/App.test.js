import { render } from '@testing-library/react';
import App from './App';

describe('Verifica montagem dos input e dos buttons', () => {
  it('Verifica montagem do input', () => {
    const { getByLabelText } = render(<App />);  // destructuring do seletor.
    const inputEmail = getByLabelText(/Email/i);  // verif se o component tem o texto.
    expect(inputEmail).toBeInTheDocument();  // verif se o component está em tela.
    expect(inputEmail.type).toBe('email');  // verif o tipo do component.
  });

  it('Verifica montagem do button \'Enviar\'', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-btn');
    expect(btn.type).toBe('button');
    expect(btn).toBeInTheDocument();
  });

  it('Verifica montagem dos buttons', () => {
    const { getAllByRole } = render(<App />);
    const btns = getAllByRole(/button/i); 
    expect(btns.length).toBe(2);
  });
})