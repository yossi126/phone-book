import React, { Component } from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export class Container extends Component {
  state = {
    Persons: [],
    Mode: false,
  };

  constructor(props) {
    super(props);
    let { xhttp } = this.DbConn("GET", ".json");
    xhttp.onload = () => {
      this.setState({
        Persons:
          JSON.parse(xhttp.response) === null
            ? []
            : Object.values(JSON.parse(xhttp.response)),
        Edit: "",
        Mode: false,
      });
    };
    xhttp.send();
  }

  AddContactMode = () => {
    this.setState({
      Mode: true,
    });
  };

  AddContact = (Contact) => {
    let { xhttp } = this.DbConn("POST", ".json");
    xhttp.onload = () => {
      this.setState({
        Persons: [...this.state.Persons, Contact],
      });
    };
    xhttp.send(JSON.stringify(Contact));

    this.setState({
      Mode: false,
      Edit: "",
    });
  };

  DellContact = (email) => {
    this.setState({
      Persons: this.state.Persons.filter((p) => {
        return p.email !== email;
      }),
    });
  };

  DbConn(method, addon) {
    let xhttp = new XMLHttpRequest();
    let url =
      "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts" + addon;
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    return { xhttp };
  }

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
            <ContactList persons={this.state.Persons} dell={this.DellContact} />
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
