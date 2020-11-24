import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

const Header = ({ AddContactMode }) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <h2>
        Phonebook <FaRegAddressBook />
      </h2>
      <form className="form-inline">
        <input className="form-control mr-sm-2" />
        <button className="btn btn-dark my-2 my-sm-0 " type="submit">
          <h5>
            <FaSearch />
          </h5>
        </button>
        <button
          onClick={AddContactMode}
          className="btn btn-dark my-2 my-sm-0 ml-1"
          type="button"
        >
          <h5>
            <AiOutlineUserAdd />
          </h5>
        </button>
      </form>
    </nav>
  );
};

export default Header;
