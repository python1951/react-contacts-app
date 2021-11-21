import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "john hopkins",
    email: "john@hopkins.com",
    phone: "777-77-777",
  };

  render() {
    const { name, email, phone } = this.props;
    var style = {
      "margin-top": "15px",
    };
    return (
      <div className='card mb-3'>
        <div className='card-header'>
          Add Contact
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='form-control form-control-lg'
                  placeholder='Enter your name'
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control form-control-lg'
                  placeholder='Enter your Email Address'
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Telephone No.</label>
                <input
                  type='text'
                  name='phone'
                  className='form-control form-control-lg'
                  placeholder='Enter your Telephone Number'
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                style={style}
                type='submit'
                value='Add Contact'
                className='btn btn-light btn-block'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
