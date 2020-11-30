import React from "react";
import del from "../img/icon.png";
import { FiDelete } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
//rafce

const ContactItem = ({ person, dell }) => {
  return (
    <div className="row">
      <div className="col-3">
        <button className="btn">
          {" "}
          <h3>
            <BiEditAlt />
          </h3>
        </button>
      </div>
      <div className="col-3">
        <button className="btn" onClick={() => dell(person.email)}>
          {" "}
          <h3>
            <FiDelete />
          </h3>
        </button>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            {person.fname} {person.lname} - {person.phone}
          </div>
        </div>
        <div className="row">
          <div className="col-12">{person.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
