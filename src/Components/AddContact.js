import React, { Component } from "react";
import { IoMdInformationCircle } from "react-icons/io";

export class AddContact extends Component {
  state = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
  };

  componentDidMount() {
    if (this.props.Person !== "") {
      this.setState({
        fname: this.props.Person.fname,
        lname: this.props.Person.lname,
        phone: this.props.Person.phone,
        email: this.props.Person.email,
      });
    }
  }

  onChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    // console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div>
            <h2>
              Contact Info <IoMdInformationCircle />
            </h2>
          </div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              value={this.state.fname}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Last Name </label>
            <input
              type="text"
              id="lname"
              value={this.state.lname}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Phone Number</label>
            {this.props.Person === "" ? (
              <input
                type="text"
                id="phone"
                value={this.state.phone}
                onChange={this.onChange}
                className="form-control"
              />
            ) : (
              <h1> {this.state.phone}</h1>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          {this.props.Person === "" ? (
            <input
              type="button"
              value="Add"
              className="btn btn-dark mt-2"
              onClick={this.handeleSubmit}
            />
          ) : (
            <input
              type="button"
              value="Edit"
              className="btn btn-dark mt-2"
              onClick={this.handeleSubmit}
            />
          )}
        </form>
      </div>
    );
  }
}

export default AddContact;
