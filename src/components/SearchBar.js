import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(userInput);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="text" className="title-text">
            <h3>Search and peruse Unsplashs' images!</h3>
          </label>
          <input
            id="text"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
