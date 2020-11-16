import React, { Component } from "react";

export class ContactList extends Component {
  render() {
    return (
      <div className="container mt-2">
        <ul className="list-group">
          <li className="list-group-item">Avi 054-1234567</li>
          <li className="list-group-item">Yossi 054-6555449</li>
          <li className="list-group-item">Max 054-1234567</li>
          <li className="list-group-item">Shuki 054-1234567</li>
        </ul>
      </div>
    );
  }
}

export default ContactList;
