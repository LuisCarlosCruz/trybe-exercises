import React from 'react';
import ValidEmail from './ValidEmail';

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  handleOnChange = (param) => {
    this.setState({ email: param })
  }

  handleOnClick = (param) => {
    this.setState({ 
      saveEmail: param, 
      email: '' })
  }

  render () {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="id-email">
          Email
          <input 
            id="id-email"
            type="email"
            value={ email }
            onChange={ (e) => this.handleOnChange(e.target.value) }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          value="Enviar"
          data-testid="id-btn"
          onClick={ () => this.handleOnClick(email) }  
        />
        <input id="btn-back" type="button" value="Voltar" />
        {/* <h3 data-testid="id-h3">{ `Email: ${saveEmail} ` }</h3> */}
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}
