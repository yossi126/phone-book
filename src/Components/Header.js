import React, { useState } from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

const Header = ({ AddContactMode, Searcher }) => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <h2>
        Phonebook <FaRegAddressBook />
      </h2>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="btn btn-dark my-2 my-sm-0 "
          type="button"
          onClick={() => Searcher(search)}
        >
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
