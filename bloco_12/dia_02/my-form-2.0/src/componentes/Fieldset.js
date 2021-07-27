import React from 'react';

class Fieldset extends React.Component {
  render() {
    return (
      <fieldset>
        <div className='divF'>

          <h3 className='titleH3'> Developers' Forms</h3>

          <div className="form-group">
            <label htmlFor="InputName"/>
            Name
            <input type="email" className="form-control input" id="InputName" placeholder="Your name"/>
          </div> 

          <div className="form-group">
            <label htmlFor="exampleInputEmail1"/>
            Email
            <input type="email" className="form-control input" id="exampleInputEmail1" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted input">We'll never share your email with anyone else.</small>
          </div> 

        <div className="form-group">
            <label htmlFor="cpf"/>
            CPF
            <input type="text" maxLength='11' className="form-control input" id="cpf" placeholder="CPF"/>
        </div>

        <div className="form-group">
            <label htmlFor="InputAddress"/>
            Address
            <textarea type="text" className="form-control input" id="InputAddress" placeholder="Your Address"/>
        </div> 

        <div className="form-group">
            <label htmlFor="InputCity"/>
            City
            <input type="text" maxLength='28' className="form-control input" id="InputCity" placeholder="Your City"/>
        </div> 

        <div className="selectState">
          <label for="estado"/>
            Estado
            <select name="estado" className='custom-select' id="estado"/>
        </div>

        <div class="form-radio">
          <label className="form-check-label" htmlFor="house"/>

          House
          <input type="radio" name='house' className="inputCheck" id="house"/>

          Apartament
          <input type="radio" name='house' className="inputCheck" id="apt"/>
        </div>

        <div /* className='divBtn' */>
        <button type="submit" className="btn btn-primary inputCheck">Submit</button>
        <button type="reset" className="btn btn-warning inputCheck">Reset</button>
        </div>

        </div>
      </fieldset>
    )
  }
}

export default Fieldset;
