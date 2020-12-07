import React from "react";
import ContactItem from "./ContactItem";
const ContactList = (props) => {
  return (
    <div className="container mt-2">
      {props.persons.map((p) => (
        <ul key={p.email}>
          <ContactItem person={p} dell={props.dell} />
        </ul>
      ))}
    </div>
  );
};

export default ContactList;

/*

        <ul className="list-group">
          {this.props.contact.map((user) => {
            return <li className="list-group-item">{user}</li>;
          })}
          <li className="list-group-item">{this.props.contact[0]}</li>
          <li className="list-group-item">{this.props.contact[1]}</li>
          <li className="list-group-item">{this.props.contact[2]}</li>
          <li className="list-group-item">{this.props.contact[3]}</li>
        </ul>
        {this.props.contact.map((user) => {
          return <h3>{user}</h3>;
        })}
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contact2.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>


*/
