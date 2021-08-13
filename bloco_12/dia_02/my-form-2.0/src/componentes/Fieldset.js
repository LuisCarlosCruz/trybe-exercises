import React from 'react';

class Fieldset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',

    }
  }

  
  render() {
    return (
    <section>
        <div className='divF'>
          <fieldset>

          <h2 className='titleH2'> Developers' Forms</h2>

          <div className="form-group">
            <label htmlFor="InputName"/>
            Name
            <input
              name='name'
              type="text" 
              className="form-control input" 
              id="InputName" 
              placeholder="Your name"
              maxLength='40'
              required
              />
          </div> 

          <div className="form-group">
            <label htmlFor="exampleInputEmail1"/>
            Email
            <input
              name='email'
              type="email" 
              className="form-control input" 
              id="exampleInputEmail1" 
              placeholder="Enter email"
              maxLength='50'
              required
              />
            {/* <small 
              id="emailHelp" 
              className="form-text text-muted input">We'll never share your email with anyone else.
            </small> */}
          </div> 

        <div className="form-group">
            <label htmlFor="cpf"/>
            CPF
            <input
              name='cpf'
              type="text" 
              maxLength='11' 
              className="form-control input" 
              id="cpf" 
              placeholder="CPF"
              required
            />
        </div>

        <div className="form-group">
            <label htmlFor="InputAddress"/>
            Address
            <textarea
              name='address'
              type="text" 
              className="form-control input" 
              id="InputAddress" 
              placeholder="Your Address"
              maxLength='200'
              required
            />
        </div> 

        <div className="form-group">
            <label htmlFor="InputCity"/>
            City
            <input
              name='city'
              type="text" 
              maxLength='28' 
              className="form-control input" 
              id="InputCity" 
              placeholder="Your City"
              required
            />
        </div> 

        <div className="selectState selectInput">
          <label for="estado"/>
          State<br/>
            <select
              name="estado" 
              className='custom-select'
              // className='form-control' 
              id="estado"
              // required
            />
        </div>

        


      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="InputResume"/>
          Resume
          <textarea
            name='resume'
            type="text" 
            className="form-control input" 
            id="InputResume" 
            placeholder="Your Resume"
            maxLength='1000'
            required
          />
        </div> 
        
        <div className="form-group">
          <label htmlFor="InputPosition"/>
          Position
          <textarea
            name='position'
            type="text" 
            className="form-control input" 
            id="InputPosition" 
            placeholder="Your Position"
            maxLength='40'
            required
          />
        </div> 
        
        <div className="form-group">
          <label htmlFor="InputPositionDescription"/>
          Position Description
          <textarea
            name='positionDescription'
            type="text" 
            className="form-control input" 
            id="InputPositionDescription" 
            placeholder="Position Description"
            maxLength='40'
            required
          />
        </div>



        <div class="form-radio">
          <label className="form-check-label" htmlFor="house"/>

          House
          <input
            type="radio" 
            name='house' 
            className="inputCheck" 
            id="house"
          />

          Apartament
          <input
            type="radio" 
            name='house' 
            className="inputCheck" 
            id="apt"
            required
          />
        </div>

        <div /* className='selectInput' */>
          <button 
           type="submit" 
            className="btn btn-primary inputCheck">Submit
          </button>
          <button 
            type="reset" 
            className="btn btn-warning inputCheck">Reset
          </button>
        </div>

      </fieldset>

      </div>





    </section>
    )
  }
}

export default Fieldset;
