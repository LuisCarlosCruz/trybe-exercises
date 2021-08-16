import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Verifica montagem dos input e dos buttons', () => {
  it('Verifica montagem do input', () => {
    const { getByLabelText } = render(<App />);  // destructuring do seletor.
    const inputEmail = getByLabelText(/Email/i);  // verif se o component tem o texto.
    expect(inputEmail).toBeInTheDocument();  // verif se o component está em tela.
    expect(inputEmail.type).toBe('email');  // verif o tipo do component.
  });

  it('Verifica montagem do button \'Enviar\'', () => {
    const { getByTestId } = render(<App />);
    const btnEnviar = getByTestId('id-btn');
    expect(btnEnviar.type).toBe('button');
    expect(btnEnviar).toBeInTheDocument();
  });

  it('Verifica montagem dos buttons', () => {
    const { getAllByRole } = render(<App />);
    const btns = getAllByRole(/button/i); 
    expect(btns.length).toBe(2);
  });

  it('Simulando evento do input e button', () => {
    // Acessar os componentes da tela
    const { getByLabelText, getByTestId } = render(<App />);
    const inputEmail = getByLabelText('Email');
    const btnEnviar = getByTestId('id-btn');
    const h3Email = getByTestId('id-h3');

    // Interar com eles
    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } } );
    fireEvent.click(btnEnviar);

    // Fazer o teste
    expect(h3Email.textContent).toBe('Email: teste@teste.com ');
    expect(inputEmail.value).toBe('');
  });
});
