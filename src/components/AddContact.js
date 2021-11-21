import React, { Component } from "react";
import { Consumer } from "../Context";
import { v1 as uuid } from "uuid";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e, dispatch) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };
  render() {
    const { name, email, phone } = this.state;
    var style = {
      "margin-top": "15px",
    };
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header'>
                <strong>ADD CONTACT</strong>
              </div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control form-control-lg'
                      placeholder='Enter your name'
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control form-control-lg'
                      placeholder='Enter your Email Address'
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>Telephone No.</label>
                    <input
                      type='text'
                      name='phone'
                      className='form-control form-control-lg'
                      placeholder='Enter your Telephone Number'
                      value={phone}
                      onChange={this.onChange}
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
          );
        }}
      </Consumer>
    );
  }
}
