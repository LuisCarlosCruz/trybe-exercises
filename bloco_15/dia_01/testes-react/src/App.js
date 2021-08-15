import React from 'react';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <label htmlFor="id-email">
          Email
        </label>
        <input id="id-email" type="email" />
        <input id="btn-send" type="button" value="Enviar" data-testid="id-btn" />
        <input id="btn-back" type="button" value="Voltar" />
      </div>
    );
  }
}
