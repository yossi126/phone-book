import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export class Container extends Component {
  render() {
    const myStyle = {
      //   border: "2px solid black",
      //   margin: "6px",
      backgroundColor: "#d5ddf6",
    };

    return (
      <>
        <Header />
        <div className="container " style={myStyle}>
          <div className="row">
            <div className="col-sm-6">
              <ContactList />
            </div>
            <div className="col-sm-6">
              <AddContact />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Container;
