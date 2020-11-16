import React, { Component } from "react";
import { IoMdInformationCircle } from "react-icons/io";

class AddContact extends Component {
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
            <label>First Name </label>
            <input className="form-control" />
          </div>
          <div>
            <label>Last Name </label>
            <input className="form-control" />
          </div>
          <div>
            <label>Phone Number </label>
            <input className="form-control" />
          </div>
          <div>
            <label>Email</label>
            <input className="form-control" />
          </div>
          <button className="btn btn-info mt-2">Add</button>
          {/* <input
              className="btn btn-danger"
              type="button"
              id="send"
              value="Add"
            /> */}
        </form>
      </div>
    );
  }
}

export default AddContact;
