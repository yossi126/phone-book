import React, { Component } from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import axios from "axios";
import Axios from "axios";

const firebaseUrl =
  "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts";

export class Container extends Component {
  state = {
    Persons: [],
    Mode: false,
    Edit: "",
    List: [],
  };

  // constructor(props) {
  //   super(props);
  //   let { xhttp } = this.DbConn("GET", ".json");
  //   xhttp.onload = () => {
  //     this.setState({
  //       Persons:
  //         JSON.parse(xhttp.response) === null
  //           ? []
  //           : Object.values(JSON.parse(xhttp.response)),
  //       Edit: "",
  //       Mode: false,
  //     });
  //   };
  //   xhttp.send();
  // }

  getContacts = () => {
    axios.get(`${firebaseUrl}.json`).then((res) => {
      // this.setState({ Persons: [] });
      let data = Object.values(res.data);
      this.setState({ Persons: data, List: data });
    });
  };

  constructor(props) {
    super(props);
    this.getContacts();
    // axios.get(`${firebaseUrl}.json`).then((res) => {
    //   const persons = res.data;
    //   this.setState({
    //     Persons: persons === null ? [] : Object.values(persons),
    //     Edit: "",
    //     Mode: false,
    //   });
    // });
  }

  AddContactMode = () => {
    this.setState({
      Mode: true,
    });
  };

  AddContact = (Contact) => {
    let data = '{"' + Contact.phone + '":' + JSON.stringify(Contact) + "}";
    let data2 = `{+${Contact.phone}+:${JSON.stringify(Contact)}+}`;
    let url =
      "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts.json";
    axios.patch(url, data).then((res) => {
      this.setState({
        Persons: [...this.state.Persons, Contact],
        Mode: false,
        Edit: "",
      });
    });
  };

  // axios
  // .post(
  //   "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts.json",
  //   JSON.stringify(Contact)
  // )
  // .then((res) => {
  //   this.setState({
  //     Persons: [...this.state.Persons, Contact],
  //     Mode: false,
  //     Edit: "",
  //   });
  // });
  // let { xhttp } = this.DbConn("POST", ".json");
  // xhttp.onload = () => {
  //   this.setState({
  //     Persons: [...this.state.Persons, Contact],
  //   });
  // };
  // xhttp.send(JSON.stringify(Contact));
  // this.setState({
  //   Mode: false,
  //   Edit: "",
  // });

  DellContact = (phone) => {
    let url = "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts";
    axios.delete(url + "/" + phone + ".json").then((res) => {
      this.setState({
        Persons: this.state.Persons.filter((p) => {
          return p.phone !== phone;
        }),
      });
    });
  };

  // DbConn(method, addon) {
  //   let xhttp = new XMLHttpRequest();
  //   let url =
  //     "https://phonebook-1b26b-default-rtdb.firebaseio.com/Contacts" + addon;
  //   xhttp.open(method, url, true);
  //   xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //   return { xhttp };
  // }

  EditContact = (phone) => {
    let index = this.state.Persons.findIndex((p) => p.phone === phone);
    this.setState({
      Edit: this.state.Persons[index],
      Mode: true,
    });
  };

  SearchData = (data) => {
    let list;
    data === ""
      ? (list = this.state.Persons)
      : (list = this.state.Persons.filter((contact) => {
          return contact.fname === data || contact.lname === data;
        }));
    this.setState({
      List: list,
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
        <Header
          AddContactMode={this.AddContactMode}
          Searcher={this.SearchData}
        />
        <div className="container mt-3" style={myStyle}>
          {this.state.Mode === true ? (
            <AddContact addContact={this.AddContact} Person={this.state.Edit} />
          ) : (
            <ContactList
              persons={this.state.List}
              dell={this.DellContact}
              edit={this.EditContact}
            />
          )}
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
