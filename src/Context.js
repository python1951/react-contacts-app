import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Awais  Qamar",
        email: "awais.qa@gmail.com",
        phone: "111-111-555",
      },
      {
        id: 2,
        name: "Omer Farooq",
        email: "omer.fa@gmail.com",
        phone: "888-555-222",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
