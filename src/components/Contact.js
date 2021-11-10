import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";

export default class Contact extends Component {
  state = { showContactInfo: true };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb3'>
              <h4>
                Name:{name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  class='far fa-angle-down'></i>
                <i
                  onClick={this.onDeleteClick(this, id, dispatch)}
                  className='fas fa-times'
                  style={{
                    float: "right",
                    color: "red",
                    cursor: "pointer",
                  }}></i>
              </h4>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email:{email}</li>
                  <li className='list-group-item'>Phone :{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
