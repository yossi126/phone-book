import React, { Component } from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export class Container extends Component {
  state = {
    Persons: [],
    Persons2: [
      {
        fname: "yossi",
        lname: "bra",
        phone: "080",
        mail: "yossi126@gmail.com",
      },
      {
        fname: "loten",
        lname: "noy",
        phone: "080",
        mail: "yy@tt",
      },
      {
        fname: "shuki",
        lname: "miz",
        phone: "080",
        mail: "yy@tt",
      },
    ],
    Mode: false,
  };

  AddContactMode = () => {
    this.setState({
      Mode: true,
    });
  };

  AddContact = (Contact) => {
    this.setState({
      Persons: [...this.state.Persons, Contact],
      Mode: false,
    });
  };

  render() {
    const myStyle = {
      //   border: "2px solid black",
      //   margin: "6px",
      backgroundColor: "#d5ddf6",
    };

    return (
      <>
        <Header AddContactMode={this.AddContactMode} />
        <div className="container mt-3" style={myStyle}>
          {this.state.Mode === true ? (
            <AddContact addContact={this.AddContact} />
          ) : (
            <ContactList contact2={this.state.Persons} />
          )}
          {/* <div className="row">
            <div className="col-sm-6">
              <ContactList
                contact={this.state.Persons}
                contact2={this.state.Persons2}
              />
            </div>
            <div className="col-sm-6">
              <AddContact
                addContact={this.AddContact}
                click={this.toConsole2}
                changed={this.toConsole}
              />
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default Container;

/*

  toConsole = (event) => {
    const { value, name } = event.target;
    // const newPersons = this.state.Persons.concat(value);
    // console.log(" value: " + value);
    // console.log(newPersons);
    this.setState(
      {
        newPerson: {
          [name]: value,
        },
      },
      () => console.log(this.state.newPerson)
    );
    // const map1 = this.state.Persons.map((x) => {
    //   console.log(x);
    // });
  };





  toConsole2 = () => {
    this.setState({
      Persons2: [
        {
          fname: "yossi",
          lname: "bra",
          phone: "080",
          mail: "yy@tt",
        },
        {
          fname: "loten",
          lname: "noy",
          phone: "080",
          mail: "yy@tt",
        },
        {
          fname: "shuki",
          lname: "miz",
          phone: "080",
          mail: "yy@tt",
        },
        {
          fname: "yossi",
          lname: "bra",
          phone: "080",
          mail: "yy@tt",
        },
      ],
    });
  };



*/
